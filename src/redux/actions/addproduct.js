import { SHOW_PRODUCT, ADD_PRODUCT } from "../types";

export function addProductTo(product){
    console.log("AddProduc"+ JSON.stringify(product));
    return {
        type: ADD_PRODUCT,
        value: product
    }
}

export function showProducts() {
    console.log("Reduce Llaado")
    const personData = {};
    const nameRef = firebase.database().ref().child('herramientas');
    nameRef.on('value',snapshot => {
            console.log("Reduce"+ JSON.stringify(snapshot))
            this.personData = snapshot.val();
            addProductTo(personData);
        },
        function(error) { console.log(error); }
    )
    return {
        type: SHOW_PRODUCT,
        value: this.personData
    }
}
