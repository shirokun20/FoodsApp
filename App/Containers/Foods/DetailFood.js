import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '@Redux/YourRedux'
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Styles
import styles from "../Styles/Foods/DetailFoodStyle";
import { apply } from "@Themes/OsmiProvider";
// Componnet
import FoodListBg from "@Components/FoodListBg";
import FoodListContainerItems from "@Components/FoodListContainerItems";
import FoodDetailHeader from "@Components/FoodDetailHeader";
import FoodDetailImage from "@Components/FoodDetailImage";
import FoodDetailName from "@Components/FoodDetailName";
import React from "react";
import FoodDetailDesc from "@Components/FoodDetailDesc";
//
const DetailFood = (props) => {
  const { params } = props.route;

  const onBack = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <FoodListBg />
      <FoodDetailHeader onBack={onBack} name={params?.name} />
      <FoodListContainerItems>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FoodDetailImage {...params} />
          <FoodDetailName {...params} />
          <FoodDetailDesc {...params}/>
        </ScrollView>
      </FoodListContainerItems>
      <View style={apply("h/1")} />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DetailFood);
