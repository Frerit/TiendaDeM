import React, {Component} from 'react';
import CartItem from "./cart-item";
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {StyleSheet, Text, View, Dimensions} from "react-native";

import { branch, renderComponent, withHandlers } from 'recompose';
import { isLoaded, isEmpty, firebaseConnect } from 'react-redux-firebase';

const populates = [
    { child: 'value', root: '/herramientas' }
];

const enhnace = compose(
    // Create listener for todos path when component mounts
    firebaseConnect([
        'todos' // { path: '/todos' } // object notation
    ]),
    // Pass data from redux as a prop
    connect((state) => ({
        todos: state.firebase.data.todos,
        // profile: state.firebase.profile // load profile
    })),
    // Add handler for toggling todo
    withHandlers({
        toggleTodoComplete: ({ firebase }) => (todoId, todo) =>
            firebase.update(`todos.${todoId}`, { done: !todo.done })
    }),
    // Show no Todos when none found
    branch(
        () => {
            console.log("no data")
        },
    )
)



const Todos = ({ todos, firebase }) => {
    // Build Todos list if todos exist and are loaded
    const todosList = !isLoaded(todos)
        ? <Text>'Loading'</Text>
        : isEmpty(todos)
            ? <Text>Todo list is empty</Text>
            : Object.keys(todos).map(
                (key, id) => (
                    <View style={styles_simpe.itemContainer}>
                        <CartItem {...this.props}/>
                    </View>
                )
            );
    return (
        <View>
            {todosList}
        </View>
    )
}


export default enhnace(Todos);

const size = Dimensions.get('window').width/2;

const styles_simpe = StyleSheet.create({
    cart: {
       flex: .5
    },
    gridView: {
        paddingTop: 30,
        flex: 1,
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