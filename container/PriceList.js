import React from 'react';
import { Text, View,FlatList,StyleSheet,Image, Platform } from 'react-native';

const list = [
    {
      id:'1',
      name: '14.99 TL',
      avatar_url:
        'http://www.realfoodbuyers.com/wp-content/uploads/2017/10/carrefour-600x300.png',
      // subtitle: 'Vice Chairman',
    },
    {
      id:'2',
      name: '19.99 TL',
      avatar_url:
        'https://im.haberturk.com/2018/07/06/ver1548051133/2047243_620x410.jpg',
    },
  ];

export default class PriceList extends React.Component {

    renderItem = ({ item }) => {
        return (
          <View style={styles.priceView}>
            <View style={{ flex:1/2 }}>
              <Image
                style={{ flex: 1, height: undefined, width: undefined }}
                source={{ uri: item.avatar_url }}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                flex:1/2,
                backgroundColor: 'white',
                justifyContent: 'center'
              }}>
              <Text style={{ fontSize: 20, textAlign: 'center', color: 'black' }}>
                {item.name}
              </Text>
            </View>
          </View>
        );
      };
    render() {
      return (
        <View style={{ flex: 1,backgroundColor:'white'}}>
          <FlatList
        data={list}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
      />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    priceView: {
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
      height: 60,
      borderRadius: 8,
      flex:1,
      backgroundColor: 'white',
      flexDirection: 'row',
      marginBottom: 5,
      marginTop: 5,
      marginLeft:5,
      marginRight:5,
      alignItems:'center',
    },
  });