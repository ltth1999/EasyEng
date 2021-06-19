import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import VocaDetail from './VocabularyDetail';


import { createStackNavigator } from '@react-navigation/stack';

import Foundation from 'react-native-vector-icons/Foundation';

import Styles from '../../styles/Styles';

var { height, width } = Dimensions.get("window");

class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataThemes: [],
      dataVocabulary: [],
      selectThemes: 0,

      isLoading: true,

      paused: true,

      iconName: "star"
    };
  }
  componentDidMount() {
    fetch('https://my-json-server.typicode.com/mizukage1999/Vocabulary/db')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ dataThemes: json.themes, dataVocabulary: json.vocabulary });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
  renderFooter = () => {
    if (!this.state.isLoading) return null
    return (
      <View style={{ width: width, alignItems: "center" }}>
        <ActivityIndicator size="small" color="#ff8000" />
      </View>
    )
  }
  render() {
    const { dataThemes, dataVocabulary, selectThemes } = this.state;
    return (
      <SafeAreaView style={{ backgroundColor: "#FFF" }}>
        <Text style={[Styles.textTheme, { padding: 5 }]}>Topic</Text>
        <View style={{
          width: width, height: 95, borderRadius: 20, paddingLeft: 8, paddingRight: 16
        }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={dataThemes}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => this._renderItem(item)}

          />
        </View>
        <Text style={[Styles.textTheme, { paddingLeft: 5 }]}>Vocabulary</Text>
        <View style={{ width: width, marginTop: 5, paddingBottom: 95, height: 458 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dataVocabulary}
            renderItem={({ item }) => this._renderItemVoca(item)}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={this.renderFooter}
          />
        </View>
      </SafeAreaView>
    );
  }
  _renderItem(item) {
    return (

      <TouchableOpacity
        onPress={() => this.setState({ selectThemes: item.id })}
        style={[Styles.divThemes]}
      >
        <Image style={{ width: 40, height: 40 }}
          resizeMode="contain"
          source={{ uri: item.image }}
        />
        <Text style={{ fontWeight:"bold",
                           fontSize:15,
                           paddingLeft:10 }} >
          {item.name}
        </Text>
        {/* <Text style={{ fontWeight:"bold",
                           fontSize:15,
                             }} >
          {item.vietsub}
        </Text> */}
      </TouchableOpacity>
    )
  }
  _renderItemVoca(item) {
    const { navigate } = this.props.navigation;
    let theme = this.state.selectThemes
    if (theme == 0 || theme == item.categorie) {
      return (
        <TouchableOpacity onPress={() => navigate('Vocabulary Details', item)} >
          <SafeAreaView style={Styles.feedItem}>
            <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={{ uri: item.image }} />
            <View style={{flex: 1}}>
              <View style={{ 
                flexDirection: "row", justifyContent: "space-between", alignItems: "center" 
               
                }}>
                <View style={{ paddingLeft: 20 }} >
                  <Text style={Styles.vocaFrTitle}>{item.nameFr}</Text>
                  <Text style={[Styles.vocaVnTitle, { color: 'black', alignItems: "center", justifyContent: "space-between", paddingBottom: 17 }]}>{item.nameVn}</Text>
                </View>
                <View style={{ paddingRight: 5 }}>
                  <Foundation
                    name='book'
                    color="gray"
                    size={30}
                  />
                  {/* <Icon_
                    name='md-heart-circle'
                    color="white"
                    size={21}
                    onPress={() => this.setState({iconName:"cloud-up"})}
                  />   */}
                </View>
              </View>
            </View>
          </SafeAreaView>
        </TouchableOpacity>

      );
    }
  }
}
const VocaStack = createStackNavigator();
export default function VocabularyList() {
  return (
    <VocaStack.Navigator initialRouteName="Beginner" >
      <VocaStack.Screen name="Beginner Level" component={Basic} />
      <VocaStack.Screen name="Vocabulary Details" component={VocaDetail} />
    </VocaStack.Navigator>
  );
}


