import {applyMiddleware, compose, createStore } from 'redux';
import RNFirebase from 'react-native-firebase';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import reducer from '../reducer';


const reactNativeFirebaseConfig = {
    debug: true
};

const reduxFirebaseConfig = {
    userProfile: 'users', // save users profiles to 'users' collection
};

export default (initialState = { firebase: {} }) => {
    // initialize firebase
    const firebase = RNFirebase.initializeApp(reactNativeFirebaseConfig);

    const middleware = [
        // make getFirebase available in third argument of thunks
        thunk.withExtraArgument({ getFirebase }),
    ];

    const store = createStore(
        reducer(),
        initialState,
        compose(
            reactReduxFirebase(firebase, reduxFirebaseConfig), // pass initialized react-native-firebase app instance
            applyMiddleware(...middleware)
        )
    );

    return store;
};