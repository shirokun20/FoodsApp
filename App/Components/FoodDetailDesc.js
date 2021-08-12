import React, { memo, useEffect, useRef } from "react";
// import PropTypes from 'prop-types'
import { View, Text } from "react-native";
import Animated, { Easing, timing, Value } from "react-native-reanimated";
// Styles
import styles from "./Styles/FoodDetailDescStyle";
import { apply } from "@Themes/OsmiProvider";
// Component
import FoodListContainerItems from "./FoodListContainerItems";

const FoodDetailDesc = (params) => {
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
    timing(_anim, _config(1, 1500)).start();
  }, [])
  //
  const inputRange = [0, 1];

  const translateX = _anim.interpolate({
    inputRange,
    outputRange: [100, 0]
  });
  //
  const translateY = _anim.interpolate({
    inputRange,
    outputRange: [100, 0]
  });

  const opacity = _anim.interpolate({
    inputRange,
    outputRange: [0, 1]
  });
  //
  return (
    <Animated.View style={{
      transform: [{
        translateY,
      }]
    }}>
      <Animated.Text style={[apply("mx-2 mt-3 font-bold text/4.4"), {
        opacity,
      }]}>Cara membuat:</Animated.Text>
      <View style={apply("mb-2 mt-1 bg-white")}>
        <FoodListContainerItems>
          <Animated.Text style={[apply("mx-2 text/5"), {
            opacity
          }]}>{params?.desc}</Animated.Text>
        </FoodListContainerItems>
      </View>
    </Animated.View>
  );
};

// // Prop type warnings
// FoodDetailDesc.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// FoodDetailDesc.defaultProps = {
//   someSetting: false
// }

export default memo(FoodDetailDesc);
