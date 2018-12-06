import { createStore, combineReducers } from 'redux';
import cartItems from '../reducer/cart';
import sessionItem from '../reducer/session';
import producItem from '../reducer/product';

const rootReducers = combineReducers({
    cart: cartItems,
    product: producItem,
    session: sessionItem
});

const store = createStore(rootReducers)

export default store;