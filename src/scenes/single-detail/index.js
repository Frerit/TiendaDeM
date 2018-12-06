import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet} from "react-native";

import {Container, Image, Header, Text,
    Body, View } from "native-base";


class SingleDetail extends Component {
    render() {
        return (
            <Container>
               <Body>
                   <View style={[styles.root, this.props.style]}>
                       <Image
                           style={styles.cardItemImagePlace}
                           source={{uri:  'https://placekitten.com/200/200'}}
                       />
                       <View style={styles.cardBody}>
                           <View style={styles.bodyContent}>
                               <Text style={styles.titleStyle}>Title goes here</Text>
                               <Text style={styles.subtitleStyle}>Subtitle here</Text>
                           </View>
                           <View style={styles.actionBody}>
                               <TouchableOpacity style={styles.actionButton1}>
                                   <Text style={styles.actionText1}>ACTION 1</Text>
                               </TouchableOpacity>
                               <TouchableOpacity style={styles.actionButton2}>
                                   <Text style={styles.actionText2}>ACTION 2</Text>
                               </TouchableOpacity>
                           </View>
                       </View>
                   </View>
                   <Stepper style={styles.stepper} />
                   <Text style={styles.text}>1</Text>
                   <Text style={styles.text2}>Cantidad</Text>
                   <Text style={styles.text3}>Text Added</Text>
                   <Button style={styles.button72} />
               </Body>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(SingleDetail);


const styles = StyleSheet.create({
    root: {
        backgroundColor: "white",
        flex: 1
    },
    card9: {
        top: -2,
        position: "absolute",
        width: 375,
        left: "0%"
    },
    stepper: {
        position: "absolute",
        height: 29,
        width: 94,
        left: "61.6%",
        top: "60.9%",
        overflow: "visible",
        shadowColor: "rgba(22,24,22,1)",
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowRadius: 2,
        elevation: 6,
        shadowOpacity: 1,
        backgroundColor: "rgba(245,50,50,1)",
        opacity: 1
    },
    text: {
        top: 440,
        left: 235,
        position: "absolute",
        backgroundColor: "transparent",
        height: 39,
        width: 86,
        fontSize: 25,
        textAlign: "center"
    },
    text2: {
        top: 411,
        left: 232,
        position: "absolute",
        backgroundColor: "transparent",
        fontSize: 14
    },
    text3: {
        height: 224.11,
        width: 174.53,
        top: 413.29,
        left: 30.35,
        position: "absolute",
        backgroundColor: "transparent"
    },
    button72: {
        top: 539,
        left: 223,
        position: "absolute",
        height: 45,
        width: 109
    },
    cardItemImagePlace: {
        flex: 1,
        backgroundColor: "#ccc",
        minHeight: 359
    },
    cardBody: {
        left: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.2)"
    },
    bodyContent: {
        justifyContent: "center",
        padding: 16,
        paddingTop: 24
    },
    titleStyle: {
        paddingBottom: 12,
        fontSize: 24,
        fontFamily: "Roboto",
        color: "#FFF"
    },
    subtitleStyle: {
        opacity: 0.5,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 16,
        color: "#FFF"
    },
    actionBody: {
        flexDirection: "row",
        padding: 8
    },
    actionButton1: {
        height: 36,
        padding: 8
    },
    actionText1: {
        opacity: 0.9,
        fontSize: 14,
        color: "#FFF"
    },
    actionButton2: {
        height: 36,
        padding: 8
    },
    actionText2: {
        opacity: 0.9,
        fontSize: 14,
        color: "#FFF"
    }

});