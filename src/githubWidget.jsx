import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { fetchUsers, fetchUser } from './actions/actions.js';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
  window.store = store;
  window.fetchUsers = fetchUsers;
  window.fetchUser = fetchUser;
});
