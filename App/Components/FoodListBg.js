import { memo } from 'react'
// import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

// Styles
import styles from './Styles/FoodListBgStyle'
import { apply } from '@Themes/OsmiProvider'

const FoodListBg = props => {
  return (
    <View style={styles.container} />
  )
}

// // Prop type warnings
// FoodListBg.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// FoodListBg.defaultProps = {
//   someSetting: false
// }

export default memo(FoodListBg)
