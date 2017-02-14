import { createStore } from 'redux';
import rootReducer from '../reducers/reducer.js';
import thunkMiddleware from 'redux-thunk';

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    thunkMiddleware,
    preloadedState
  );
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

export default configureStore;
