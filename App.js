import { View, Text, TouchableHighlight, Alert } from "react-native";
import Constants from 'expo-constants'
import SayHello from "./src/components/SayHello";
import UsersList from "./src/components/UsersList";

export default function App() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1}}>
     <UsersList/>
    </View>
  );
}


