import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from '../styles/Styles';
import paris from '../assets/paris.png';

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <ImageBackground
      source={require('../assets/home.png')}
      style={{ width: "100%", height: "120%" }}
    >
      <ScrollView>
        <View style={{
          width: "100%",
          alignItems: "flex-end",
          paddingHorizontal: 20
        }}>
          <View style={{
            paddingHorizontal: 10,
            paddingVertical: 12,
            borderRadius: 10,
            marginTop: 30,

          }}>

          </View>
        </View>

        <View style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#FFF",
          padding: 10,
          borderRadius: 12,
          marginHorizontal: 20,
          marginTop: 20
        }}>
          <TextInput
            placeholder="Search for new knowledge!"
            placeholderTextColor="#345c74"
            style={{
              fontFamily: "Bold",
              fontSize: 15,
              width: 280,
              paddingHorizontal: 12
            }}
          />
          <Image
            source={require('../assets/sear.png')}
            style={{ height: 14, width: 14, marginLeft: 20 }}
          />
        </View>
        <View style={Styles.viewContent}>
          <View>
            <Text style={Styles.textContent}>Start Lessons</Text>

            <TouchableOpacity style={Styles.touchContent} activeOpacity={0.2}
              onPress={() => navigation.navigate('VocabularyList', { diff: 'MEDIUM' })}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}>Beginner</Text>
              <Icon name='arrow-right' color='white' size={20} style={{ paddingLeft: 40 }} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.touchContent} activeOpacity={0.2}
              onPress={() => navigation.navigate('Intermediate', { diff: 'MEDIUM' })}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}>Intermediate</Text>
              <Icon name='arrow-right' color='white' size={20} style={{ paddingLeft: 20 }} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.touchContent} activeOpacity={0.2}
              onPress={() => navigation.navigate('WordScreen', { diff: 'HARD' })}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}>Advanced</Text>
              <Icon name='arrow-right' color='white' size={20} style={{ paddingLeft: 40 }} />
            </TouchableOpacity>
          </View>
          <Image source={paris}
            style={Styles.imageContent} />
        </View>
      </ScrollView>
    </ImageBackground>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

});

