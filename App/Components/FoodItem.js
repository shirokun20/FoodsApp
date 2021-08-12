import { memo, useState } from 'react'
// import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, Image } from 'react-native'

// Styles
import styles from './Styles/FoodItemStyle'
import { apply } from '@Themes/OsmiProvider'

const FoodItem = ({ item, index, onItemPress = () => {} }) => {
  const [errorImage, setErrorImage] = useState(false);

  return (
    <View
      style={[
        {
          width: "50%",
        },
        styles.container,
      ]}
    >
      <TouchableOpacity
        style={styles.btnContainer}
        activeOpacity={0.8}
        onPress={onItemPress}
      >
        {errorImage ? (
          <View
            style={styles.imageError}
          >
            <Text style={styles.textError}>
              Gambar tidak{"\n"}dapat ditampilkan!
            </Text>
          </View>
        ) : (
          <Image
            source={{
              uri: item?.image,
            }}
            resizeMode={"cover"}
            onError={() => setErrorImage(true)}
            style={styles.image}
          />
        )}
        <View
          style={[
            styles.bottomContainer,
          ]}
        >
          <Text style={styles.textName}>{item?.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// // Prop type warnings
// FoodItem.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// FoodItem.defaultProps = {
//   someSetting: false
// }

export default memo(FoodItem)
