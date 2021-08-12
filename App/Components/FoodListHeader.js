import { memo } from 'react'
// import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

// Styles
import styles from './Styles/FoodListHeaderStyle'
import { apply } from '@Themes/OsmiProvider'

const FoodListHeader = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Daftar Makanan</Text>
    </View>
  )
}

// // Prop type warnings
// FoodListHeader.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// FoodListHeader.defaultProps = {
//   someSetting: false
// }

export default memo(FoodListHeader)
