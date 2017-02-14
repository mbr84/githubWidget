
import { RECEIVE_USERS,
         REMOVE_USER } from '../actions/actions';
import merge from 'lodash/merge';

const rootReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_USERS:
      nextState = {};
      action.users.forEach(user => nextState[user.id] = user);
      return nextState;
    case REMOVE_USER:
      nextState = merge({}, state);
      delete nextState[action.user.id];
      return nextState;
    default:
      return state;
  }
};

export default rootReducer;
