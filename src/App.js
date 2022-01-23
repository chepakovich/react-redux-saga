import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Operators from './components/Operators';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Operators />
    </Provider>
  );
};
export default App;
