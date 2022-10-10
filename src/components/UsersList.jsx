import React from 'react';
import { FlatList, Text, View } from 'react-native';
import users from '../data/users'
import UserItem from './UserItem';

const UsersList = () => {
    return (
        <FlatList
         data={users} 
         ItemSeparatorComponent={()=><Text> </Text>}
         renderItem={({ item: user}) =>(

           <UserItem user={user}/>

        )}/>
           
    );
};

export default UsersList;