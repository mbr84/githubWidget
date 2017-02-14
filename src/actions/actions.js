import SECRET_TOKEN from '../util/secrets.js';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const removeUser = user => ({
  type: REMOVE_USER,
  user,
});

const randomUserId = () => Math.floor(10000000 * Math.random() + 100);

const fetchUsers = () => (
  dispatch => {
    const fetchUser = (userId) => {
      fetch(`https://api.github.com/user/${userId}?access_token=${SECRET_TOKEN}`)
      .then(response => {
        if (response.status >= 400) {
          fetchUser(randomUserId());
        }
        return response.json();
      })
      .then(json => dispatch(receiveUser(json)));
    };
    for (let i = 0; i < 6; i++) {
      fetchUser(randomUserId());
    }
  }
);

export const fetchUsersIfLow = () => (
  (dispatch, getState) => {
    if (Object.keys(getState()).length <= 3) dispatch(fetchUsers());
  }
);
