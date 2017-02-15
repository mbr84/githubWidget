import { REPLACE_USER,
         BEGIN_FETCHING,
         FULL_FETCH } from '../actions/actions';

const RootReducer = (state = { users: [], isFetching: true }, action) => {
  Object.freeze(state);
  const newUsersArr = state.users;

  switch (action.type) {
    case REPLACE_USER:
      for (let i = 0; i < newUsersArr.length; i++) {
        if (newUsersArr[i].id === action.oldUser.id) {
          newUsersArr[i] = action.newUser;
          break;
        }
      }
      return { users: newUsersArr, isFetching: false };
    case FULL_FETCH:
      return {
        users: action.users,
        isFetching: false,
      };
    case BEGIN_FETCHING:
      return {
        users: state.users,
        isFetching: true,
      };
    default:
      return state;
  }
};

export default RootReducer;
