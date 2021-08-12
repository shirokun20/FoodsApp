import { memo } from 'react'
// import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import Entypo from "react-native-vector-icons/dist/Entypo";
// Styles
import styles from './Styles/FoodDetailHeaderStyle'
import { apply } from '@Themes/OsmiProvider'

const FoodDetailHeader = ({
  name = '',
  onBack = () => {}
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} activeOpacity={0.75}>
        <Entypo
          name="chevron-small-left"
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={apply("flex")}>
        <Text style={styles.textTitle}>
          Detail Food
        </Text>
        <Text style={styles.textSubTitle}>{name}</Text>
      </View>
    </View>
  )
}

// // Prop type warnings
// FoodDetailHeader.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// FoodDetailHeader.defaultProps = {
//   someSetting: false
// }

export default memo(FoodDetailHeader)
