import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, Image} from "react-native";
import {View, Text} from "native-base";
import {connect} from "react-redux";

import LoginForm from "./component/login-form";



class Login extends Component {

    render() {
        return (
            <KeyboardAvoidingView behavior="button" style={styles.container}>
                <View style={styles.loginContainer}>

                </View>
                <View>
                    <LoginForm {...this.props} />
                    <Text> {this.props.persona } </Text>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

function mapStateToProps(state) {
    return {
        persona: state.personData
    }
}
function mapDispatchToProps(dispatch) {
    return {};
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);