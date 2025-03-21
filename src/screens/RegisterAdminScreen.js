import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '.../mainstyle';

export default function RegisterAdminScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Admin Registration</Text>
            <Button title="Register as Admin" onPress={() => alert('Admin Registered!')} />
            <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
}
