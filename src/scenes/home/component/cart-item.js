import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Text, Icon} from "native-base";


class CartItem extends Component {
    // Only for displaying symbol in BuilderX.
    render() {
        return (
            <View style={[styles.root, this.props.style]} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Detail")}>
                    <Image style={styles.cardItemImagePlace} source={{uri: 'https://placekitten.com/200/200'}}

                    />
                </TouchableOpacity>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.button1}  >
                        <Icon
                            style={styles.icon1}
                            name="heart"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button4}>
                        <View style={styles.center}>
                            <Text style={styles.text}>$1000</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button3}>
                        <Icon style={styles.icon3} name="ios-cart"/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default CartItem;

const styles = StyleSheet.create({
    root: {
        elevation: 2,
        flex: 1,
        flexWrap: "nowrap",
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 2,
        shadowColor: "#000000",
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
        paddingVertical: 2,
    },
    icon1: {
        opacity: 0.5,
        color: "#000",
        fontSize: 24
    },
    button4: {
        width: 80,
        alignSelf: "stretch"
    },
    button3: {
        paddingVertical: 2,
    },
    icon3: {
        opacity: 0.5,
        color: "#000",
        fontSize: 24
    },
    text: {
        top: 8,
        fontSize: 11,
        alignSelf: 'center',
        position: "absolute",
        backgroundColor: "transparent",
        opacity: 1
    }
});
