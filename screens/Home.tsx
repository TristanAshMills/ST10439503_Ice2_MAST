import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';
import React, { useState } from "react";
import { View, Image, Text, TextInput, Button, StyleSheet, } from "react-native";

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;


export default function () {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [Error,setError] = useState(false);
    const navigation = useNavigation<homeScreenProp>();
  
    return (
      <View style={styles.container}>
        <View style={styles.mainPicture}>
          <Image style={styles.imageSize} source={require('../assets/image_for_x.png')} />
        </View>
  
        <View>
          <Text style={styles.welcomeText}>Welcome to your React App!</Text>
            <Text style = {Error? styles.red : styles.blank}>
                {Error?"Please fill in all the text boxs":""}
            </Text>
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
          <Button title="Add User" onPress={() => {
                    if ((isEmpty(name)==false) && (isEmpty(surname)==false))
                    {
                        navigation.navigate('ViewDetails', {
                        Name : name,
                        Surname : surname
                    });
                        console.log("Name: " + name + " Surname: " + surname);
                setError(false);
              }
              else
              {
                setError(true);
              }
              
            }}/>
        </View>
      </View>
    );
  }
  function isEmpty(value: string | null): boolean {
    if (value === null) {
        return true;
    }
    return value.trim().length === 0;
}

  

  const styles = StyleSheet.create({
    welcomeText: {
      marginTop: 40,
      color: 'purple',
      fontSize: 28,
      textAlign: 'center',
    },
    red: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 26,
        textAlign: 'center'
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
    blank:{
        fontSize: 10,
    },
  });
  