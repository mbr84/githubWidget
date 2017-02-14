import React from 'react';
import { Provider } from 'react-redux';
import Widget from './widget.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <Widget />
  </Provider>
);

export default Root;
