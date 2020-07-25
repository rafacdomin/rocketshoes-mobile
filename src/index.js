import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#141419" barStyle="light-content" />
      <Routes />
    </Provider>
  );
};

export default App;
