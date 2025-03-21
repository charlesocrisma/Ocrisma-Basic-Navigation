import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../mainstyle';

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();

            if (data.token) {
                Alert.alert('Login Successful', 'You will be redirected.');
                navigation.navigate('Home', { username });
            } else {
                Alert.alert('Login Failed', 'Invalid username or password.');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Something went wrong.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
            <Button title="Login" onPress={handleLogin} />
            <Button title="Register" onPress={() => navigation.navigate('Register')} />
        </View>
    );
}
