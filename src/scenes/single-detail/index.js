import React, {Component} from 'react';
import {connect} from 'react-redux';
import { firebaseConnect, withFirebase } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import {StyleSheet, ImageBackground} from "react-native";

import {Container, Button, Text, Icon,
    Content, View } from "native-base";


export default class SingleDetail extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            cantidad: 1
        }
    }

    static propTypes = {
        todo: PropTypes.object
    };

    decrement() {
        this.setState({
            cantidad: (this.state.cantidad > 1) ? this.state.cantidad - 1 : 0
        })
    }

    increment() {
        this.setState({
            cantidad: (this.state.cantidad >= 1) ? this.state.cantidad + 1 : 0
        })
    }

    toggleDone = () => firebase.set(`/tools/${id}`, !tools.value)


    render() {

        const { navigation, firebase, tools } = this.props;
        const item = navigation.state.params
        console.log("Tttt" + JSON.stringify(tools));
        console.log("Tttt" + JSON.stringify(this.props));

        console.log(this.toggleDone);

        return (
            <Container style={styles.root}>
               <Content>
                   <View style={styles.banner}>
                       <ImageBackground source={{uri: item.image}} style={{width: '100%', height: '100%'}}>

                       </ImageBackground>
                   </View>

                   <View style={{flex: 1, flexDirection: 'row'}}>
                       <View style={styles.columL} >
                           <Text style={styles.title}> {item.title} </Text>
                           <Text style={styles.text3}>
                               { item.subtitle }
                           </Text>
                       </View>
                       <View style={styles.columR} >
                           <Text >Cantidad</Text>
                           <Text style={styles.text}> {this.state.cantidad } </Text>
                           <View style={styles.butons}>
                               <Button light onPress={() => { this.decrement()}}><Icon name="md-remove"/></Button>
                               <Button light onPress={() => { this.increment()}}><Icon name="md-add"/></Button>
                           </View>
                           <Button style={{padding: '10%', alignSelf: 'center'}} danger onPress= {() => {
                               this.props.addItemToCart
                               console.log(JSON.stringify(item))
                           } }>
                               <Text>Agregar</Text>
                           </Button>
                       </View>
                   </View>
               </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "white",
        flex: 1,
    },
    banner: {
        flex: 1,
        height: 300,
        flexDirection: 'row'
    },
    columL: {
        flex: 1,
        padding: 15,
    },
    title:{
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20
    },
    columR: {
        flex: .8,
        paddingTop: 20,
        alignContent: 'center',
        alignItems: 'center',
        //justifyContent: 'center'
    },
    butons: {
      height: 50,
      marginVertical: 10,
      flexDirection: 'row'
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
        marginTop: 10,
      fontSize: 18,
      fontWeight: 'bold'
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