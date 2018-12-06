import { REMOVE_FROM_CART, ADD_TO_CART } from "../types";


export function addProductToCart(product){
    console.log("AddProduc"+ JSON.stringify(product));
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function removeProductFromCart(product){
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}