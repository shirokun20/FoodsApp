import { memo, useEffect, useRef, useState } from "react";
// import PropTypes from 'prop-types'
import { View, Text, Image } from "react-native";

// Styles
import styles from "./Styles/FoodDetailImageStyle";
import { apply } from "@Themes/OsmiProvider";
import Animated, { Easing, timing, Value } from "react-native-reanimated";

const FoodDetailImage = (params) => {
  //
  const [errorImage, setErrorImage] = useState(false);
  const _anim = useRef(new Value(0)).current;

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
    timing(_anim, _config(1, 1000)).start();
  }, []);

  const inputRange = [0, 1];

  const scale = _anim.interpolate({
    inputRange,
    outputRange: [0.5, 1],
  });

  const opacity = _anim.interpolate({
    inputRange,
    outputRange: [0, 1],
  })
  //
  return (
    <Animated.View style={[styles.container, {
      opacity,
      transform: [{
        scale,
      }]
    }]}>
      {errorImage ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Gambar tidak{"\n"}dapat ditampilkan!
          </Text>
        </View>
      ) : (
        <Image
          source={{
            uri: params?.image,
          }}
          onError={() => {
            setErrorImage(true);
          }}
          style={styles.image}
        />
      )}
    </Animated.View>
  );
};

// // Prop type warnings
// FoodDetailImage.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// FoodDetailImage.defaultProps = {
//   someSetting: false
// }

export default memo(FoodDetailImage);
