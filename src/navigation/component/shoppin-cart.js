import React from 'react';
import { Container, Icon, Button, Badge, Text } from "native-base";
import { connect } from 'react-redux';
import styles from "./../../styles";

import { withNavigation } from 'react-navigation';

const ShoppingCartIcon = props => (
        <Button style={styles.shoppinheader} badge transparent onPress={()=> props.navigation.navigate('Cart')}>
            <Text style={styles.textBageShopping}>  0 </Text>
            <Icon style={styles.iconShopin} size={ 40 } name="ios-cart"  />
        </Button>
);



export default withNavigation(ShoppingCartIcon);