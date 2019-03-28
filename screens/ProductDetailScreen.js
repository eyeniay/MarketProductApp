import React from "react";
import { View, Image } from "react-native";
import PriceTabNavigator from "../navigation/PriceTabNavigator";
import Styles from "../assets/style/styles";

export default class ProductDetailScreen extends React.Component {
  static navigationOptions = {
    title: "Ürün Detayı"
  };

  render() {
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.productDetailImageView}>
          <Image
            style={Styles.flexImage}
            source={{
              uri: "http://cdn.akakce.com/sutas/sutas-1-kg-suzme-peynir-z.jpg"
            }}
            resizeMode="contain"
          />
        </View>
        <View style={Styles.productDetailTabView}>
          <PriceTabNavigator />
        </View>
      </View>
    );
  }
}
