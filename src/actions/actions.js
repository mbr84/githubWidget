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

export const fetchUser = (userId) => (
  dispatch => {
    fetch(`https://api.github.com/user/${userId}?access_token=${SECRET_TOKEN}`)
    .then(response => {
      if (response.status >= 400) {
        fetchUser(randomUserId());
      }
      return response.json();
    })
    .then(json => {
      if (json.message !== 'Not Found') dispatch(receiveUser(json));
    });
  }
);

export const fetchUsers = () => (
  dispatch => {
    for (let i = 0; i < 3; i++) {
      dispatch(fetchUser(randomUserId()));
    }
  }
);

export const firstUserFetch = () => (
  (dispatch, getState) => {
    if (Object.keys(getState()).length <= 3) dispatch(fetchUsers(randomUserId()));
  }
);
