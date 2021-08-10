import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// Components
import CSplash from "@Components/CSplash";
// Styles
import styles from "./Styles/LaunchScreenStyle";
import { apply } from "@Themes/OsmiProvider";

const LaunchScreen = (props) => {
  // Animation Akhir Start
  const [aAS, saAS] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={apply("gray-800")} />
      <CSplash 
        setAnimAwalFinish={() => setTimeout(() => saAS(true), 1200)}
        setAnimAkhirFinish={() => routeKeHome(true, props)}
        animAkhirStart={aAS}
        
      />
    </SafeAreaView>
  );
};
//
let routeKeHome = (finished, props) => {
  if (finished)
    props.navigation.reset({
      index: 0,
      routes: [
        {
          name: "WelcomeScreen",
        },
      ],
    });
};
//
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);
