import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

export default function ViewDetailsScreen() {
    
    const route = useRoute();
    const { Name, Surname } = route.params as {
        Name: string;
        Surname: string;
    }
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Name: {Name} Surname: {Surname} </Text>
        </View>
        );
};

