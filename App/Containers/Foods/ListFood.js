import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '@Redux/YourRedux'
import { FlatList, RefreshControl, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// Styles
import styles from "../Styles/Foods/ListFoodStyle";
import { apply } from "@Themes/OsmiProvider";
// Components
import FoodListBg from "@Components/FoodListBg";
import FoodListHeader from "@Components/FoodListHeader";
import FoodListContainerItems from "@Components/FoodListContainerItems";
import FoodsActions from "@Redux/FoodsRedux";
import FoodListLoading from "@Components/FoodListLoading";
import FoodItem from "@Components/FoodItem";

const ListFood = (props) => {
  const { foods } = props;

  const [refreshing] = useState(false);

  useEffect(() => {
    props.getFoods({});
  }, []);

  const pullToRefresh = () => {
    props.getFoods({});
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={apply("gray-800")}
      />
      <FoodListBg />
      <FoodListHeader />
      <FoodListContainerItems>
        {foods?.fetching ? (
          <FoodListLoading />
        ) : (
          <FlatList
            data={foods?.data}
            showsVerticalScrollIndicator={false}
            scrollEnabled
            keyExtractor={(_, i) => i.toString()}
            renderItem={({ item, index }) => (
              <FoodItem
                item={item}
                index={index}
                onItemPress={() => {
                  console.log(item);
                }}
              />
            )}
            numColumns={2}
            refreshControl={
              <RefreshControl
                colors={[apply("gray-800")]}
                refreshing={refreshing}
                onRefresh={() => pullToRefresh()}
              />
            }
            ListEmptyComponent={() => (
              <View>
                <Text>Tidak ada data ditampilkan</Text>
              </View>
            )}
          />
        )}
      </FoodListContainerItems>
      <View style={apply("h/1")} />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    foods: state.foods.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFoods: (value) => dispatch(FoodsActions.foodsRequest(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListFood);
