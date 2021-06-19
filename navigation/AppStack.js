import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import TalkScreen from './../screens/TalkScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Easy English',
        headerLeft: () => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons.Button
              name="ios-menu"
              size={25}
              color='#000000'
              backgroundColor='#ffffff'
              onPress={() => navigation.openDrawer()}
            />
          </View>
        )
      }}
    />

  </Stack.Navigator>
);

const MessageStack = ({ navigation }) => (
  <Stack.Navigator>
  <Stack.Screen
    name="Chat"
    component={MessagesScreen}
    options={{
      title: 'Chat Room',
      headerLeft: () => (
        <View style={{ marginLeft: 10 }}>
          <Ionicons.Button
            name="arrow-back"
            size={25}
            color='#000000'
            backgroundColor='#ffffff'
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      )
    }}
  />
  </Stack.Navigator>
);

const TalkStack = ({ navigation }) => (
  <Stack.Navigator>
  <Stack.Screen
    name="Speak"
    component={TalkScreen}
    options={{
      title: 'Speak',
      headerLeft: () => (
        <View style={{ marginLeft: 10 }}>
          <Ionicons.Button
            name="arrow-back"
            size={25}
            color='#000000'
            backgroundColor='#ffffff'
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      )
    }}
  />

</Stack.Navigator>
);
const ProfileStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: 'Edit Profile',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'Chat') {
      return false;
    }
    return true;
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fabc91',
      }}>
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={({ route }) => ({
          tabBarLabel: 'Home',
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Messages"
        component={MessageStack}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Speak"
        component={TalkStack}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="md-mic-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
