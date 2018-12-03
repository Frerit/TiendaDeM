import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import Home from "../scenes/home";
import Login from "../scenes/login";
import ShoppingCartIcon from "./component/shoppin-cart";




const AppNavigator = createSwitchNavigator({
    Login: Login,
    Home: Home
},{
    initialRouteName: "Home",
    navigationOptions: {
        headerRight: <ShoppingCartIcon/>
    }
});

export default createAppContainer(AppNavigator);