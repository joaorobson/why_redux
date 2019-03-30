import React, { Component } from 'react';
import Sum from './components/Sum';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './reducers/index';

const store = createStore(Reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Sum />
      </Provider>

    );
  }
}

export default App;
