import { RECEIVE_USER,
         REMOVE_USER } from '../actions/actions';
import merge from 'lodash/merge';

const rootReducer = (state = {}, action) => {
  Object.freeze(state);
  let newUser;
  let nextState;

  switch (action.type) {
    case RECEIVE_USER:
      newUser = { [action.user.id]: action.user };
      return merge({}, state, newUser);
    case REMOVE_USER:
      nextState = merge({}, state);
      delete nextState[action.user.id];
      return nextState;
    default:
      return state;
  }
};

export default rootReducer;
