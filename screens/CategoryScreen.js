import React from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback
} from "react-native";
import * as Animatable from "react-native-animatable";
import Accordion from "react-native-collapsible/Accordion";
import { ListItem } from "react-native-elements";
import NavigationService from "../navigation/NavigationService";
import { MonoText } from "../components/StyledText";
import Styles from "../assets/style/styles";

export default class CategoryScreen extends React.Component {
  state = {
    activeSections: []
  };

  static navigationOptions = {
    title: "TestApp"
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <View style={Styles.accordionView}>
        <ImageBackground
          source={{ uri: section.link }}
          style={Styles.categoryBackgroundImage}
        >
          <MonoText style={Styles.codeHighlightText}>
            {section.category_name}
          </MonoText>
        </ImageBackground>
      </View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={Styles.categoryContent}
        transition="backgroundColor"
      >
        {section.subcategory.map((item, key) => (
          <View key={key}>
            <TouchableOpacity
              onPress={() => {
                NavigationService.navigate("ProductList", { userName: "root" });
              }}
            >
              <ListItem
                title={item.val}
                leftAvatar={{
                  source: {
                    uri:
                      "https://image.freepik.com/iconos-gratis/caja-de-leche_318-39899.jpg"
                  },
                  title: ""
                }}
              />
            </TouchableOpacity>
            <View style={Styles.separator} />
          </View>
        ))}
      </Animatable.View>
    );
  }

  render() {
    return (
      <View style={Styles.mainContainer}>
        <ScrollView>
          <Accordion
            activeSections={this.state.activeSections}
            sections={CONTENT}
            touchableComponent={TouchableWithoutFeedback}
            expandMultiple={false}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </ScrollView>
      </View>
    );
  }
}

//Dummy content to show
const CONTENT = [
  {
    category_name: "Süt ve Kahvaltılık",
    link: "https://www.halisinden.com/Uploads/EditorUploads/SUT.jpg",
    subcategory: [{ id: 10, val: "Süt" }, { id: 12, val: "Peynir" }]
  },
  {
    category_name: "Meyve/Sebze",
    link:
      "https://reimg-carrefour.mncdn.com/bannerimage/21martbanner4_0_MC/8813434568754.png",
    subcategory: [{ id: 1, val: "Peynir" }, { id: 3, val: "Süt" }]
  },
  {
    category_name: "Temizlik Ürünleri",
    link:
      "https://reimg-carrefour.mncdn.com/bannerimage/21martbanner6_0_MC/8813434634290.png",
    subcategory: [{ id: 4, val: "Sub Cat 4" }, { id: 5, val: "Sub Cat 5" }]
  },
  {
    category_name: "Kişisel Bakım",
    link:
      "https://reimg-carrefour.mncdn.com/bannerimage/21martbanner5_0_MC/8813434601522.png",
    subcategory: [{ id: 7, val: "Sub Cat 7" }, { id: 9, val: "Sub Cat 9" }]
  },
  {
    category_name: "Item 5",
    link: "http://placehold.it/1080x350?text=1",
    subcategory: [{ id: 13, val: "Sub Cat 13" }, { id: 15, val: "Sub Cat 5" }]
  },
  {
    category_name: "Item 6",
    link: "http://placehold.it/1080x350?text=1",
    subcategory: [{ id: 17, val: "Sub Cat 17" }, { id: 18, val: "Sub Cat 8" }]
  },
  {
    category_name: "Item 7",
    link: "http://placehold.it/1080x350?text=1",
    subcategory: [{ id: 20, val: "Sub Cat 20" }]
  },
  {
    category_name: "Item 8",
    link: "http://placehold.it/1080x350?text=1",
    subcategory: [{ id: 22, val: "Sub Cat 22" }]
  },
  {
    category_name: "Item 9",
    link: "http://placehold.it/1080x350?text=1",
    subcategory: [{ id: 26, val: "Sub Cat 26" }, { id: 27, val: "Sub Cat 7" }]
  },
  {
    category_name: "Item 10",
    link: "http://placehold.it/1080x350?text=1",
    subcategory: [{ id: 28, val: "Sub Cat 28" }, { id: 30, val: "Sub Cat 0" }]
  }
];
