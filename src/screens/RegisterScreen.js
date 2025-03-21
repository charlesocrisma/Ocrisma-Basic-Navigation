import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../mainstyle';

export default function RegisterScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleRegister = () => {
        alert('Registration successful!');
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
}
