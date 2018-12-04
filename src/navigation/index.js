import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import Home from "../scenes/home";
import Login from "../scenes/login";


const Stack = createStackNavigator({

})

const AppNavigator = createSwitchNavigator({
    Login: Login,
    Home: Home
},{
    initialRouteName: "Login"
});

export default createAppContainer(AppNavigator);