import React, {Component} from 'react';
import { createStore  } from 'redux';
import { Provider } from 'react-redux';
import AppNavigator from "./src/navigation";
import reducer from "./src/reducer";

const store = createStore(reducer);


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


