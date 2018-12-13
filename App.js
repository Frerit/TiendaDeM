import React, {Component} from 'react';
import { Provider } from 'react-redux';
import AppNavigator from "./src/navigation";
import createStore from "./src/redux/store";
import NavigationService from './src/navigation/component/navigationService';

// Store Initialization
const initialState = { firebase: {} };
const store = createStore(initialState);

export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
          <AppNavigator ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
          }}/>
        </Provider>
    );
  }
};


