import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function ViewDetailsScreen() {
    return (
        <View style={styles.container}>
            <Text>Name: ### Surname: ###</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
