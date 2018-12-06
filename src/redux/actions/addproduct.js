import { SHOW_PRODUCT, ADD_PRODUCT } from "../types";
import firebase from "react-native-firebase";


export function addProductTo(product){
    console.log("AddProduc"+ JSON.stringify(product));
    return {
        type: ADD_PRODUCT,
        value: product
    }
}

export function showProducts() {
    console.log("Reduce Llaado")
    const nameRef = firebase.database().ref().child('herramientas');
    nameRef.on('value',snapshot => {
            console.log("Reduce"+ JSON.stringify(snapshot))
            const personData = snapshot.val();
            addProductTo(personData);
        },
        function(error) { console.log(error); }
    )
    return true;
}
