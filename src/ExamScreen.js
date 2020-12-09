import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ExamScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#2ECCFA'}}>
       <StatusBar barStyle="dark-content"/>
         <View
          style={{
            backgroundColor: '#81c04d',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
        <Ionicons.Button name="ios-menu" size={25} backgroundColor='#81c04d' 
        onPress={() => navigation.openDrawer()}></Ionicons.Button>
        <Text style={{fontSize: 20, color: 'white', fontWeight:'bold'}}>Exam</Text>
       
      </View>
        

      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 60,
          }}>
          <Text style={{color: 'black', fontSize: 20}}>Please choose the test</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TouchableOpacity onPress={() => navigation.navigate('playquiz')}>
            <View
              style={{
                height: 80,
                width: 150,
                backgroundColor: '#FFED9C',
                borderWidth: 1,
                borderColor: 'yellow',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                marginTop: 30,
                marginLeft: 40,
                flexDirection: 'row',
              }}>
              <Text>Test 1</Text>
            </View>
            
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('playquiz1')}>
          <View style={{
                height: 80,
                width: 150,
                backgroundColor: '#FFED9C',
                borderWidth: 1,
                borderColor: 'yellow',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                marginTop: 30,
                marginLeft: 20,
                flexDirection: 'row',
              }}>
              <Text>Test 2</Text>
            </View>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('playquiz2')}>
            <View
              style={{
                height: 80,
                width: 150,
                backgroundColor: '#FFED9C',
                borderWidth: 1,
                borderColor: 'yellow',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                marginTop: 40,
                marginLeft: 40,
                flexDirection: 'row',
              }}>
              <Text>Test 3</Text>
            </View>
            
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('playquiz3')}>
          <View style={{
                height: 80,
                width: 150,
                backgroundColor: '#FFED9C',
                borderWidth: 1,
                borderColor: 'yellow',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                marginTop: 40,
                marginLeft: 20,
                flexDirection: 'row',
              }}>
              <Text>Test 4</Text>
            </View>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('playquiz4')}>
            <View
              style={{
                height: 80,
                width: 150,
                backgroundColor: '#FFED9C',
                borderWidth: 1,
                borderColor: 'yellow',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                marginTop: 40,
                marginLeft: 40,
                flexDirection: 'row',
              }}>
              <Text>Test 5</Text>
            </View>
            
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('playquiz5')}>
          <View style={{
                height: 80,
                width: 150,
                backgroundColor: '#FFED9C',
                borderWidth: 1,
                borderColor: 'yellow',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                marginTop: 40,
                marginLeft: 20,
                flexDirection: 'row',
              }}>
              <Text>Test 6</Text>
            </View>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default ExamScreen;
