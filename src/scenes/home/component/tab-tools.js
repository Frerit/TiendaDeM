import React, {Component} from 'react';
import {View, Text} from "native-base";
import CartItem from "./cart-item";
import styles from "../../../styles";
import {StyleSheet} from "react-native";
import GridView from 'react-native-super-grid';




class TabTools extends Component {
    render() {
        return (
            <GridView
                style={styles.gridView}
                itemDimension={150}
                items={[1,2,3,4,5,6]}
                renderItem={item => (<CartItem {...this.props} />)}
            />
        );
    }
}

export default TabTools;

const styles_simpe = StyleSheet.create({
    cart: {
       flex: .5
    },
    gridView: {
        paddingTop: 30,
        flex: 1,
    },
});