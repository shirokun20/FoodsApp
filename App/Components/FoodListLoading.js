import { memo } from 'react'
// import PropTypes from 'prop-types'
import { View, Text, ActivityIndicator } from 'react-native'

// Styles
import styles from './Styles/FoodListLoadingStyle'
import { apply } from '@Themes/OsmiProvider'

const FoodListLoading = props => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        color={apply("gray-800")}
        size={"large"}
        style={apply("mb-3")}
      />
      <Text style={styles.textLoading}>
        Tunggu Sebentar!
      </Text>
    </View>
  )
}

// // Prop type warnings
// FoodListLoading.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// FoodListLoading.defaultProps = {
//   someSetting: false
// }

export default memo(FoodListLoading)
