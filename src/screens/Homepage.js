import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from '../mainstyle';

export default function HomePageScreen() {
    const [employees, setEmployees] = useState([]);
    const route = useRoute();
    const { username } = route.params || { username: 'Guest' };

    useEffect(() => {
        fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(data => setEmployees(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, {username}!</Text>
            <Text style={styles.subtitle}>Employee List:</Text>
            {employees.length === 0 ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={employees}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <Text style={styles.item}>{item.name.firstname} {item.name.lastname}</Text>}
                />
            )}
        </View>
    );
}
