import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/reducer.js';
import thunkMiddleware from 'redux-thunk';

const configureStore = (preloadedState = { users: [], isFetching: false }) => {
  const store = createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  );
  return store;
};

export default configureStore;
