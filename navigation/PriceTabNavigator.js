import { createMaterialTopTabNavigator,createAppContainer  } from 'react-navigation';
import PriceListScreen from "../container/PriceList";
import PriceChartScreen from "../container/PriceChart";

const nav = createMaterialTopTabNavigator ({
    PriceList: { screen: PriceListScreen, navigationOptions: { tabBarLabel: 'FİYAT'}},
    PriceChart: { screen: PriceChartScreen, navigationOptions: { tabBarLabel: 'DEĞİŞİM GRAFİĞİ'}},
},{
  tabBarOptions: {
    swipeEnabled: true,
    shifting: true,
    activeTintColor: 'white',
    inactiveTintColor: '#EAEDED',
    initialRouteName: 'First',
    style: {
      backgroundColor: 'steelblue',
    },
    indicatorStyle: {
      backgroundColor: 'white'
    }
  }
  });
const PriceTabNavigator = createAppContainer(nav);
export default PriceTabNavigator;

  
