import React from 'react';
import { Text, View, StyleSheet } from 'react-native';



const styles = StyleSheet.create({

     container: {
        padding:20,
        paddingBottom: 5,
         paddingTop: 5

    },
    itemTitle:{
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#09f'
    }
})



const UserItem = ({user}) => {
    return (
        <View key={user.id} style={styles.container}>
            <Text style={styles.itemTitle}>{user.name}</Text>
            <Text>UserName: {user.username}</Text>
            <Text>Email: {user.email}</Text>
            <Text>City: {user.address.city}</Text>
            <Text>Web Site: {user.website}</Text>
        </View>
    );
};

export default UserItem;