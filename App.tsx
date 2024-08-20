import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/Home'; 
import ViewDetailsScreen from './screens/ViewDetails'; 

type RootStackParamList = {
  Home: undefined;
  ViewDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function MainScreen() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.mainPicture}>
        <Image style={styles.imageSize} source={require('./assets/image_for_x.png')} />
      </View>

      <View>
        <Text style={styles.welcomeText}>Welcome to your React App!</Text>
      </View>

      <View style={styles.InputFlex}>
        <Text style={styles.HeadingText}>Enter Name:</Text>
        <TextInput style={styles.InputBoxes} placeholder="First Name" onChangeText={newText => setName(newText)} />
      </View>

      <View style={styles.InputFlex}>
        <Text style={styles.HeadingText}>Enter Surname:</Text>
        <TextInput style={styles.InputBoxes} placeholder="Surname" onChangeText={newText => setSurname(newText)} />
      </View>

      <View style={styles.Button}>
        <Button 
          title="Add User" 
          onPress={() => {
            // Navigate to ViewDetailsScreen
            navigation.navigate('ViewDetails');
            console.log("Name: " + name + " Surname: " + surname);
          }} 
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="ViewDetails" component={ViewDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    marginTop: 40,
    color: 'purple',
    fontSize: 28,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  HeadingText: {
    textAlign: 'center',
  },
  InputBoxes: {
    textAlign: 'center',
    width: 200,
  },
  mainPicture: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSize: {
    width: 350,
    height: 350,
  },
  InputFlex: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-evenly',
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  Button: {
    height: 40,
    width: 400,
  },
});
