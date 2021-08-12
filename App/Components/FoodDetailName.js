import { memo, useEffect, useRef } from 'react'
// import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

// Styles
import styles from './Styles/FoodDetailNameStyle'
import { apply } from '@Themes/OsmiProvider'
//
import Animated, { Easing, timing, Value } from 'react-native-reanimated'

const FoodDetailName = params => {
  //
  const _anim = useRef(new Value(0)).current;
  //
  const _config = (toValue, duration = 1000, easing = Easing.inOut(Easing.ease)) => {
    return {
      duration,
      toValue: toValue,
      easing,
    };
  };
  //
  useEffect(() => {
    _anim.setValue(0);
    timing(_anim, _config(1,1250)).start();
  }, []);
  //
  const inputRange = [0, 1];
  //
  const translateY = _anim.interpolate({
    inputRange,
    outputRange: [100, 0],
  });

  const scale = _anim.interpolate({
    inputRange,
    outputRange: [0, 1],
  });

  const opacity = _anim.interpolate({
    inputRange,
    outputRange: [0, 1],
  });
  //
  return (
    <Animated.Text
      style={[styles.textContainer, {
        opacity,
        transform: [{
          translateY,
        }, {
          scale,
        }]
      }]}>
      {params?.name}
    </Animated.Text>
  )
}

// // Prop type warnings
// FoodDetailName.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// FoodDetailName.defaultProps = {
//   someSetting: false
// }

export default memo(FoodDetailName)
