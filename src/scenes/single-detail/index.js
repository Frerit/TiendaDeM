import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, ImageBackground} from "react-native";
import { addProductToCart } from "../../redux/actions/addcard";

import {Container, Button, Text, Icon,
    Content, View } from "native-base";


class SingleDetail extends Component {
    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item');

        return (
            <Container style={styles.root}>
               <Content>
                   <View style={styles.banner}>
                       <ImageBackground source={{uri: 'https://placekitten.com/200/200'}} style={{width: '100%', height: '100%'}}>
                          <View style={styles.outBanner}>
                           <Text>Inside</Text>
                              <Icon name='home' />
                          </View>
                       </ImageBackground>
                   </View>

                   <View style={{flex: 1, flexDirection: 'row'}}>
                       <View style={styles.columL} >
                           <Text style={styles.text3}>
                               [06/Dec/2018:19:26:04 +0000] "GET /index.delta?platform=android&
                               dev=true&minify=false&deltaBundleId=54a9123e04d6fc30 HT n   TP/1.1" 200 - "-"
                               "okhttp/3.11.0"

                           </Text>
                       </View>
                       <View style={styles.columR} >
                           <Text >Cantidad</Text>
                           <Text style={styles.text}> {JSON.stringify(item)}</Text>
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

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        addItemToCart: ( product ) => dispatch(addProductToCart(product))
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(SingleDetail);


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
    columR: {
        flex: .8,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
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