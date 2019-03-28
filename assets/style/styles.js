import { StyleSheet,Platform } from "react-native";

const styles = StyleSheet.create({
      mainContainer: {
        flex: 1,
        backgroundColor: 'white'
      },
      flexImage:{
        flex: 1, 
        height: undefined, 
        width: undefined
      },
    // Begin: Category
      accordionView:{
        marginBottom:3,
        flex:1, 
        height: 120
      },
      codeHighlightText: {
        color: 'steelblue',
        fontSize: 25,
        backgroundColor: 'rgba(248, 249, 249, 0.8)'
      },
      categoryBackgroundImage:{
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center'
      },
      categoryContent: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
      },
      separator: {
        height: 0.5,
        backgroundColor: '#808080',
        width: '90%',
        marginLeft: 16,
        marginRight: 16,
      },
      // End: Category 
      // Begin ProductList
      productListContainer: {
        flex: 1,
        backgroundColor: '#EAEDED',
      },
      productListItemView:{
        flex: 1 / 2,
        margin: 4,
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 250,
        borderRadius: 8    
      },
      productListImageView:{
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
      },
      productListItemTitle: {
        fontSize: 13,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
      },
      productListTextView: {
          height: 70,
          alignItems: 'center',
          justifyContent: 'center',
          padding:1,
          borderTopColor: '#EAEDED',
          borderTopWidth: 1
      },
      // End ProductList
      // Begin ProductDetail
      productDetailImageView: {
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
      productDetailTabView: {
        flex: 2 / 3,
      },
      // End ProductDetail
      // Begin PriceList
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
      priceHalfView: {
        flex:1/2,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 8,
      },
      priceText:{
        fontSize: 20, 
        textAlign: 'center', 
        color: 'black'
      },
      // End PriceList
});
export default styles;