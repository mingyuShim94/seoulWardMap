import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import MapScreen from "../Screens/MapScreen";
const NativeStack = createNativeStackNavigator();

const Stack = ({ navigation }) => (
  <NativeStack.Navigator screenOptions={{ headerShown: false }}>
    <NativeStack.Screen name="서울 구지도" component={MapScreen} />
  </NativeStack.Navigator>
);

export default Stack;
