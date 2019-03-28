import React, { Component } from "react";
import { View, FlatList, Image, TouchableOpacity, Text } from "react-native";
import NavigationService from "../navigation/NavigationService";
import Styles from "../assets/style/styles";

export default class ProductListScreen extends Component {
  state = {
    productListData: {}
  };
  static navigationOptions = {
    title: "Ürünler"
  };

  componentDidMount() {
    let items = Array.apply(null, Array(19)).map((v, i) => {
      return {
        id: i,
        title: "Bahçıvan Tam Yağlı Taze Eritme Tost Peyniri 700 G " + i,
        src: "http://cdn.akakce.com/sutas/sutas-1-kg-suzme-peynir-z.jpg"
      };
    });
    this.setState({
      productListData: items
    });
  }
  render() {
    return (
      <View style={Styles.productListContainer}>
        <FlatList
          data={this.state.productListData}
          renderItem={this.renderProductListItems}
          numColumns={2}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }

  renderProductListItems = ({ item }) => {
    return (
      <TouchableOpacity
        style={Styles.productListItemView}
        onPress={() => {
          NavigationService.navigate("ProductDetail", { userName: "root" });
        }}
      >
        <View style={Styles.productListImageView}>
          <Image
            style={Styles.flexImage}
            source={{ uri: item.src }}
            resizeMode="contain"
          />
        </View>
        <View style={Styles.productListTextView}>
          <Text style={Styles.productListItemTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
}
