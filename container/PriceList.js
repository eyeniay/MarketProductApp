import React from "react";
import { Text, View, FlatList, Image } from "react-native";
import Styles from "../assets/style/styles";

export default class PriceList extends React.Component {
  renderPriceItem = ({ item }) => {
    return (
      <View style={Styles.priceView}>
        <View style={Styles.priceHalfView}>
          <Image
            style={Styles.flexImage}
            source={{ uri: item.avatar_url }}
            resizeMode="contain"
          />
        </View>
        <View style={Styles.priceHalfView}>
          <Text style={Styles.priceText}>{item.name}</Text>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={Styles.mainContainer}>
        <FlatList
          data={priceList}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={this.renderPriceItem}
        />
      </View>
    );
  }
}

// dummy data
const priceList = [
  {
    id: "1",
    name: "14.99 TL",
    avatar_url:
      "http://www.realfoodbuyers.com/wp-content/uploads/2017/10/carrefour-600x300.png"
    // subtitle: 'Deneme',
  },
  {
    id: "2",
    name: "19.99 TL",
    avatar_url:
      "https://im.haberturk.com/2018/07/06/ver1548051133/2047243_620x410.jpg"
  }
];
