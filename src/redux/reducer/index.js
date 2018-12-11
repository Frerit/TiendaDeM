import { combineReducers } from 'redux'
import { firebaseStateReducer } from 'react-redux-firebase'
import cartItem from "../reducer/cart";


export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        cartItem: cartItem,
        firebase: firebaseStateReducer,
        ...asyncReducers
    })
}

export default makeRootReducer

// Useful for injecting reducers as part of async routes
export const injectReducer = (store, { key, reducer }) => {
    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.asyncReducers))
}