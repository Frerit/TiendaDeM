import React, { Component } from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import {Image, Text, Icon} from "native-base";


export default class CartItem extends Component {
    // Only for displaying symbol in BuilderX.
    static containerStyle = {
        height: 236,
        width: 185,
        defaultHeight: "fixed",
        defaultWidth: "fixed"
    };
    render() {
        return (
            <View style={[styles.root, this.props.style]}>
                <Image
                    style={styles.cardItemImagePlace}
                    source={require("../assets/cardImage3.jpg")}
                />
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.button1}>
                        <Icon
                            style={styles.icon1}
                            name="heart"
                            type="MaterialCommunityIcons"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button4}>
                        <View style={styles.center}>
                            <Text style={styles.text}>Text Added</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button3}>
                        <Icon style={styles.icon3} name="ios-cart" type="Ionicons" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    root: {
        elevation: 3,
        flex: 1,
        flexWrap: "nowrap",
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: -2,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        overflow: "hidden"
    },
    cardItemImagePlace: {
        flex: 1,
        backgroundColor: "#ccc",
        minHeight: 180
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 8
    },
    button1: {
        padding: 8
    },
    icon1: {
        opacity: 0.5,
        color: "#000",
        fontSize: 24
    },
    button4: {
        padding: 8,
        width: 99,
        alignSelf: "stretch"
    },
    button3: {
        padding: 8
    },
    icon3: {
        opacity: 0.5,
        color: "#000",
        fontSize: 24
    },
    text: {
        top: 208,

        position: "absolute",
        backgroundColor: "transparent",
        opacity: 1
    }
});
