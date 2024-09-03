import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './screens/RootStackParams';
import React from 'react';
import HomeScreen from './screens/Home'; 
import ViewDetailsScreen from './screens/ViewDetails'; 

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ViewDetails" component={ViewDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

