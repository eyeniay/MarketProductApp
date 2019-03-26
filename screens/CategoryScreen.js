import React from 'react';
import { ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,TouchableWithoutFeedback,Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { ListItem } from 'react-native-elements';
import NavigationService from '../navigation/NavigationService';
import { MonoText } from '../components/StyledText';

export default class CategoryScreen extends React.Component {
  state = {
    //default active selector
    activeSections: [],
  };

  static navigationOptions = {
    title: 'TanzimApp',
  };

  setSections = sections => {
    //setting up a active section state
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <View style={{marginBottom:3,flex:1, height: 120}}>
      {/* <Image
                  style={{ flex: 1, height: undefined, width: undefined }}
                  source={{ uri: section.link }}
                  resizeMode="contain"
                />
                */}
         <ImageBackground source={{uri:section.link}} style={{width:'100%',height:'100%',justifyContent: 'center', alignItems: 'center'}}>
         <MonoText style={styles.codeHighlightText}>{section.category_name}</MonoText>
          {/* <Text style={styles.headerText}>{section.category_name}</Text>  */}
        </ImageBackground> 
      </View>
    );
  };

  renderContent(section, _, isActive) {
    //Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        {/*Making a sub list of a main header*/}
        {section.subcategory.map((item, key) => (
          //key is the index of the array
          //item is the single item of the array
          <View key={key} style={styles.item}>
            <TouchableOpacity
              onPress={() => {NavigationService.navigate('ProductList', { userName: 'root' });}}>
              <ListItem
    title={item.val}
    leftAvatar={{
      source: { uri: 'https://image.freepik.com/iconos-gratis/caja-de-leche_318-39899.jpg' },
      title: ''
    }}
  />
            </TouchableOpacity>
            <View style={styles.separator} />
          </View>
        ))}
      </Animatable.View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{}}>
          <Accordion
            activeSections={this.state.activeSections}
            //for any default active section
            sections={CONTENT}
            //data to show in expandable view
            touchableComponent={TouchableWithoutFeedback}
            //which type of touchable component you want
            //It can be the following Touchables
            //TouchableHighlight, TouchableNativeFeedback
            //TouchableOpacity , TouchableWithoutFeedback
            expandMultiple={false}
            //Do you want to expand mutiple at a time or single at a time
            renderHeader={this.renderHeader}
            //Header Component(View) to render
            renderContent={this.renderContent}
            //Content Component(View) to render
            duration={400}
            //Duration for Collapse and expand
            onChange={this.setSections}
            //sesubcategorying the state of active sections
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  codeHighlightText: {
    color: 'steelblue',
    fontSize: 25,
    backgroundColor: 'rgba(248, 249, 249, 0.8)'
  },
  headerText: {
    fontSize: 25,
    fontWeight: '500',
    color:'black',
    textAlign:'center',
    backgroundColor: 'rgba(248, 249, 249, 0.8)'
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'white',
  },
  inactive: {
    backgroundColor: 'white',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '90%',
    marginLeft: 16,
    marginRight: 16,
  }
});

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    category_name: 'Süt ve Kahvaltılık',
    link: 'https://www.halisinden.com/Uploads/EditorUploads/SUT.jpg',
    subcategory: [{ id: 10, val: 'Süt' }, { id: 12, val: 'Peynir' }],
  },
  {
    category_name: 'Meyve/Sebze',
    link: 'https://reimg-carrefour.mncdn.com/bannerimage/21martbanner4_0_MC/8813434568754.png',
    subcategory: [{ id: 1, val: 'Peynir' }, { id: 3, val: 'Süt' }],
  },
  {
    category_name: 'Temizlik Ürünleri',
    link: 'https://reimg-carrefour.mncdn.com/bannerimage/21martbanner6_0_MC/8813434634290.png',
    subcategory: [{ id: 4, val: 'Sub Cat 4' }, { id: 5, val: 'Sub Cat 5' }],
  },
  {
    category_name: 'Kişisel Bakım',
    link: 'https://reimg-carrefour.mncdn.com/bannerimage/21martbanner5_0_MC/8813434601522.png',
    subcategory: [{ id: 7, val: 'Sub Cat 7' }, { id: 9, val: 'Sub Cat 9' }],
  },
  {
    category_name: 'Item 5',
    link: 'http://placehold.it/1080x350?text=1',
    subcategory: [{ id: 13, val: 'Sub Cat 13' }, { id: 15, val: 'Sub Cat 5' }],
  },
  {
    category_name: 'Item 6',
    link: 'http://placehold.it/1080x350?text=1',
    subcategory: [{ id: 17, val: 'Sub Cat 17' }, { id: 18, val: 'Sub Cat 8' }],
  },
  {
    category_name: 'Item 7',
    link: 'http://placehold.it/1080x350?text=1',
    subcategory: [{ id: 20, val: 'Sub Cat 20' }],
  },
  {
    category_name: 'Item 8',
    link: 'http://placehold.it/1080x350?text=1',
    subcategory: [{ id: 22, val: 'Sub Cat 22' }],
  },
  {
    category_name: 'Item 9',
    link: 'http://placehold.it/1080x350?text=1',
    subcategory: [{ id: 26, val: 'Sub Cat 26' }, { id: 27, val: 'Sub Cat 7' }],
  },
  {
    category_name: 'Item 10',
    link: 'http://placehold.it/1080x350?text=1',
    subcategory: [{ id: 28, val: 'Sub Cat 28' }, { id: 30, val: 'Sub Cat 0' }],
  },
];

