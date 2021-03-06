import React, { Component } from 'react';
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Chat from './components/Chat'
import Diary from './components/Diary'
import Profile from './components/Profile'
import Together from './components/Together'
import socketer from './socketer'


const Tab = createBottomTabNavigator()

const tabIconHash = {
  Together: 'heart-outline',
  Diary: 'book-outline',
  Chat: 'chatbox-ellipses-outline',
  Profile: 'person-circle-outline',
}

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={tabIconHash[route.name]} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#F44336',
          inactiveTintColor: '#9E9E9E',
        }}
      >
        <Tab.Screen name='Together' component={Together} />
        <Tab.Screen name='Diary' component={Diary} />
        <Tab.Screen name='Chat' component={Chat} />
        <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}