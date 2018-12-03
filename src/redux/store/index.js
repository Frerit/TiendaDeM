import { createStore, combineReducers } from 'redux';
import cartItems from '../reducer/addcart';
import sessionItem from '../reducer/session';

const rootReducers = combineReducers({
    cart: cartItems,
    session: sessionItem
});

const store = createStore(rootReducers)

export default store;