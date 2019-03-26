import React from 'react';
import { View,Dimensions} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default class PriceChart extends React.Component {
    render() {
      return (
        <View style={{flex:1,backgroundColor: 'white'}}>
  <LineChart
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }]
    }}
    width={Dimensions.get('window').width} // from react-native
    height={220}
    chartConfig={{
      backgroundColor: 'white',
      backgroundGradientFrom: 'white',
      backgroundGradientTo: 'white',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(70,130,180, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 1
    }}
  />
</View>
      );
    }
  }
