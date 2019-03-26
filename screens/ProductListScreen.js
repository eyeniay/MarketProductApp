import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  Platform
} from 'react-native';
import NavigationService from '../navigation/NavigationService';

 export default class ProductListScreen extends Component {
     state = {
      dataSource: {},
    };
    static navigationOptions = {
        title: 'Ürünler',
      };
  
  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(19)).map((v, i) => {
      return {
        id: i,
        title: 'Bahçıvan Tam Yağlı Taze Eritme Tost Peyniri 700 G ' + i,
      // src: 'http://placehold.it/200x200?text=' + (i + 1),
      src: 'http://cdn.akakce.com/sutas/sutas-1-kg-suzme-peynir-z.jpg',
      };
    });
    that.setState({
      //Setting the data source
      dataSource: items,
    });
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <TouchableOpacity
            style={{
                flex: 1 / 2,
                flexDirection: 'column',
                margin: 4,
                height: 250,
                backgroundColor: 'white',
                borderRadius: 8
              }}
              onPress={() => {NavigationService.navigate('ProductDetail', { userName: 'root' });}}>
              <View style={styles.productImageView}>
                <Image
                  style={{ flex: 1, height: undefined, width: undefined }}
                  source={{ uri: item.src }}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  height: 70,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding:1,
                  borderTopColor: '#EAEDED',
                  borderTopWidth: 1,
                }}>
                <Text style={styles.tabBarInfoText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#EAEDED',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  tabBarInfoText: {
    fontSize: 13,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  productImageView:{
    flex:1,
    height: 180,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  }
});
