import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";


const cartItem = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            return state.filter(cartItem =>
                cartItem.id !== action.payload.id)
    }
    return state;
}

export default cartItem;