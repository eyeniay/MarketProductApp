import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform
} from 'react-native';
import PriceTabNavigator from '../navigation/PriceTabNavigator';

export default class ProductDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Ürün Detayı',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.product}>
                <Image
                  style={{ flex: 1, height: undefined, width: undefined }}
                  source={{ uri: 'http://cdn.akakce.com/sutas/sutas-1-kg-suzme-peynir-z.jpg' }}
                  resizeMode="contain"
                />
        </View>
        <View style={styles.productDetail}>
          <PriceTabNavigator />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  product: {
    flex: 1 / 3,
    backgroundColor: 'white',
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
  },
  productDetail: {
    flex: 2 / 3,
  },
});

