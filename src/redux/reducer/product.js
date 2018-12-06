import { SHOW_PRODUCT, ADD_PRODUCT } from "../types";
import firebase from "react-native-firebase";

const initialState = {
    productData: { },
};

const producItem = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_PRODUCT:
            return { ...state, personData: action.value };

        case ADD_PRODUCT:
            return { ...state, personData: action.value };
        default:
            return state;
    }
}

export default producItem;
