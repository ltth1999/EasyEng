import React from 'react';
import {
  View, 
  Text, 
  Button, 
  StyleSheet, 
  StatusBar,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const BookmarkScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
          <StatusBar barStyle="dark-content"/>
         <View
          style={{
            backgroundColor: '#ff6347',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
        <Ionicons.Button name="ios-menu" size={25} backgroundColor="#ff6347" 
        onPress={() => navigation.openDrawer()}></Ionicons.Button>
        <Text style={{fontSize: 20, color: 'white', fontWeight:'bold'}}> Favorite</Text>
       
      </View>
        
      </View>
    );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    
  },
});