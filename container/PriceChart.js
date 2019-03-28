import React from "react";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Styles from "../assets/style/styles";

export default class PriceChart extends React.Component {
  render() {
    return (
      <View style={Styles.mainContainer}>
        <LineChart
          data={{
            labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran"],
            datasets: [
              {
                data: [13.99, 15.6, 16.3, 17.25, 18.0, 24.75]
              }
            ]
          }}
          width={Dimensions.get("window").width}
          height={220}
          chartConfig={{
            backgroundColor: "white",
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            decimalPlaces: 2,
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
