import React, {Component} from 'react';
import CartItem from "./cart-item";
import { compose } from 'redux';
import { connect } from 'react-redux';
import GridView from 'react-native-super-grid';
import {StyleSheet, Text, View, Dimensions} from "react-native";

import { branch, renderComponent } from 'recompose';
import { firebaseConnect } from 'react-redux-firebase';

const enhnace = compose(
    // Create listener for todos path when component mounts
    firebaseConnect([
        'tools' // { path: '/todos' } // object notation
    ]),
    // Pass data from redux as a prop
    connect((state) => ({
        tools: state.firebase.data,
        nav: state.nav,
        // profile: state.firebase.profile // load profile
    })),
    // Show no Todos when none found
    branch(
        () => {
            console.log("no data")
        },
    )
);

// Renderisar Array por que trae mucha informacion
const renderArray = (arra) => {
    const x = JSON.stringify(arra);
    var retn = [];
    if (x.length > 2) {
        const jso = JSON.parse(x);
        for (let i = 0; i < jso.tools.length; i++) {
            if (jso.tools[i] != null) {
                retn.push(jso.tools[i])
            }
        }
    }
    return retn;
};

const ToolList = ({ tools, firebase, nav }) => {
    // Build Todos list if todos exist and are loaded
    const toolsList = renderArray(tools);

    return (
        <GridView
            style={styles_simpe.gridView}
            itemDimension={130}
            items={toolsList}
            renderItem={item => (<CartItem nav={nav} item={item} {...this.props} />)}
        />
    )
};


export default enhnace(ToolList);

const size = Dimensions.get('window').width/2;

const styles_simpe = StyleSheet.create({
    cart: {
       flex: .5
    },
    gridView: {
        paddingTop: 30,
        flex: 0.4,
        paddingBottom: 30
    },
    itemContainer: {
        width: size,
        flexDirection: 'row',
        height: size,
    },
    item: {
        flex: 1,
        margin: 3,
        backgroundColor: 'lightblue',
    }
});