import { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { connect } from 'react-redux'
import StartupActions from '@Redux/StartupRedux'
import ReduxPersist from '@Config/ReduxPersist'
import AppNavigation from '@Navigation/AppNavigation'
import { SafeAreaView } from 'react-native-safe-area-context'
// import * as Sentry from "@sentry/react-native";
// styles
import { apply } from '@Themes/OsmiProvider'

const RootContainer = (props) => {
  useEffect(() => {
    if (!ReduxPersist.active) {
      props.startup()
    }

    // Sentry.init({
    //   dsn: "https://8f024f742cf74d4aa740731d6fb24ce6@o954846.ingest.sentry.io/5904070",
    // }); 
  }, [])

  return (
    <SafeAreaView style={apply('flex')}>
      <StatusBar barStyle="dark-content" backgroundColor={apply('white')} />
      <AppNavigation />
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
