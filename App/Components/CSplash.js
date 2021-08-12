import React, { memo, useEffect, useRef } from "react";
// import PropTypes from 'prop-types'
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/dist/Ionicons";
import { appName, version } from "../../package.json";
import Animated, {
  Easing,
  Extrapolate,
  timing,
  Value,
} from "react-native-reanimated";
// Styles
import styles from "./Styles/CSplashStyle";
import { apply } from "@Themes/OsmiProvider";
//
const AnimIcon = Animated.createAnimatedComponent(Icon);
//
const CSplash = ({
  animAwalFinish = false,
  animAkhirFinish = false,
  animAkhirStart = false,
  setAnimAwalFinish = () => {},
  setAnimAkhirFinish = () => {},
}) => {
  //
  const _scaleIcon = useRef(new Value(0)).current;
  const _scaleLogo = useRef(new Value(0)).current;
  //
  const _config = (toValue, duration = 1000, easing = Easing.inOut(Easing.ease)) => {
    return {
      duration,
      toValue: toValue,
      easing,
    };
  };

  useEffect(() => {
    if (!animAkhirStart) AnimAwal();
  }, [animAkhirStart]);

  useEffect(() => {
    if (animAkhirStart) AnimTextAkhir();
  }, [animAkhirStart]);

  const AnimAwal = () => {
    _scaleIcon.setValue(0);
    const anim = timing(_scaleIcon, _config(1));
    anim.start(({ finished }) => {
      if (finished) {
        AnimTextAwal();
      }
    });
  };

  const AnimTextAwal = () => {
    _scaleLogo.setValue(0);
    timing(_scaleLogo, _config(1, 2500, Easing.bounce)).start(({ finished }) => {
      if (finished) setAnimAwalFinish(!animAwalFinish);
    });
  };

  const AnimTextAkhir = () => {
    timing(_scaleLogo, _config(50)).start(({ finished }) => {
      if (finished) AnimAkhir();
    });
  };

  const AnimAkhir = () => {
    timing(_scaleIcon, _config(22, 2000)).start(({ finished }) => {
      if (finished) setAnimAkhirFinish(!animAkhirFinish);
    });
  };

  const color = Animated.interpolateColors(_scaleIcon, {
    inputRange: [0, 1, 15],
    outputColorRange: [apply("gray-800"), apply("white"), apply("gray-800")],
    extrapolate: Extrapolate.CLAMP,
  });
  //
  const rotate = Animated.interpolate(_scaleIcon, {
    inputRange: [0, 1, 22],
    outputRange: ["180deg", "0deg", "0deg"],
    extrapolate: Extrapolate.CLAMP,
  });
  //
  const rotateX = Animated.interpolate(_scaleLogo, {
    inputRange: [0, 1, 50],
    outputRange: ["-120deg", "0deg", "0deg"],
  });
  //
  const opacity = Animated.interpolate(_scaleLogo, {
    inputRange: [0, 1, 50],
    outputRange: [0, 1, 0],
  });
  // 
  const scaleLogo = Animated.interpolate(_scaleLogo, {
    inputRange: [1, 50],
    outputRange: [1, 0],
  })
  //
  return (
    <React.Fragment>
      <View style={[styles.childContainer]}>
        <AnimIcon
          name="md-fast-food-sharp"
          style={[
            styles.logo,
            {
              color: color,
              transform: [
                {
                  scale: _scaleIcon,
                },
                {
                  rotate,
                },
              ],
            },
          ]}
        />
        <Animated.Text
          style={[
            {
              opacity,
              transform: [
                {
                  rotateX,
                },
                {
                  scale: scaleLogo,
                }
              ],
            },
            apply("text-white font-bold text/3"),
          ]}
        >
          {appName.toUpperCase()}
        </Animated.Text>
      </View>
      <View>
        <Animated.Text
          style={[
            styles.version,
            {
              color: color,
            },
          ]}
        >
          Versi {version}
        </Animated.Text>
      </View>
    </React.Fragment>
  );
};

// // Prop type warnings
// CSplash.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// CSplash.defaultProps = {
//   someSetting: false
// }

export default memo(CSplash);
