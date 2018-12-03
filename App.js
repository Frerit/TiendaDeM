import React, {Component} from 'react';
import { Provider } from 'react-redux';
import AppNavigator from "./src/navigation";
import store from "./src/redux/store";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
          <AppNavigator/>
        </Provider>
    );
  }
};


