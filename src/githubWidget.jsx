import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import fetch from 'isomorphic-fetch'


import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    },
  };
  const store = configureStore(preloadedState);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
  window.store = store
});
