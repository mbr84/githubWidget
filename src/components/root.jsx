import React from 'react';
import { Provider } from 'react-redux';
import Widget from './widget.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <h1>Hello!</h1>
  </Provider>
);

export default Root;
