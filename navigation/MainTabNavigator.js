import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ProductListScreen from "../screens/ProductListScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Anasayfa",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-home" : "home"}
    />
  )
};

const ProductRootStack = createStackNavigator(
  {
    Category: CategoryScreen,
    ProductList: ProductListScreen,
    ProductDetail: ProductDetailScreen
  },
  {
    initialRouteName: "Category"
  }
);

ProductRootStack.navigationOptions = {
  tabBarLabel: "Kategoriler",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list" : "list"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  ProductRootStack
});
