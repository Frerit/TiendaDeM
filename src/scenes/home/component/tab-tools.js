import React, {Component} from 'react';
import CartItem from "./cart-item";
import { connect } from 'react-redux';
import styles from "../../../styles";
import {StyleSheet, Text} from "react-native";
import GridView from 'react-native-super-grid';
import {showProducts} from "../../../redux/actions/addproduct";

class TabTools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: 1,
        };
    }
    componentDidUpdate() {
        this.props.showProducts()
    }
    rendr() {
        <GridView
            style={styles.gridView}
            itemDimension={150}
            items={this.props.personData}
            renderItem={item => (<CartItem {...this.props}  />)}
        />
    }

    render() {
        console.log("Tabbs|||" + JSON.stringify(this.props));
        return (
            <Text> Hola </Text>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("|||||||");
    console.log(state);
    return {
        personData: state.personData
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        showProducts: () => dispatch(showProducts())
    };
}


export default connect(
    mapStateToProps, mapDispatchToProps)
    (TabTools);

const styles_simpe = StyleSheet.create({
    cart: {
       flex: .5
    },
    gridView: {
        paddingTop: 30,
        flex: 1,
    },
});