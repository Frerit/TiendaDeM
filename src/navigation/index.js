import React from "react";
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

import Home from "../scenes/home";
import Login from "../scenes/login";

import SingleDetail from "../scenes/single-detail";


import ShoppingCartIcon from "./component/shoppin-cart";
import {Header, Right} from "native-base";
import {View} from "react-native";

const Stack = createStackNavigator({
    Home: {
        screen: Home,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    Detail: SingleDetail
}, {
    defaultNavigationOptions: {
        headerStyle: {
            marginTop: 30,
        },
        headerRight: <ShoppingCartIcon/>
    }
});

const AppNavigator = createSwitchNavigator({
    Login: Login,
    Stack: Stack
},{
    initialRouteName: "Login",
});

export default createAppContainer(AppNavigator);