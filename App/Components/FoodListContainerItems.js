import { memo } from 'react'
// import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

// Styles
import styles from './Styles/FoodListContainerItemsStyle'
import { apply } from '@Themes/OsmiProvider'

const FoodListContainerItems = props => {
  return (
    <View style={styles.container}>
      {
        props.children
      }
    </View>
  )
}

// // Prop type warnings
// FoodListContainerItems.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// FoodListContainerItems.defaultProps = {
//   someSetting: false
// }

export default memo(FoodListContainerItems)
