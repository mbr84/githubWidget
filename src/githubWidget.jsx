import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { firstUserFetch, fetchUser } from './actions/actions.js';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
  window.store = store;
  window.firstUserFetch = firstUserFetch;
  window.fetchUser = fetchUser;
});
