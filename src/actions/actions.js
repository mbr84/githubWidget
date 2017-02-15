import { SECRET_GITHUB_TOKEN } from '../util/secrets.js';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REPLACE_USER = 'REPLACE_USER';
export const FULL_FETCH = 'FULL_FETCH';
export const BEGIN_FETCHING = 'BEGIN_FETCHING';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const replaceUser = (newUser, oldUser) => ({
  type: REPLACE_USER,
  oldUser,
  newUser,
});

export const fullFetch = (users) => ({
  type: FULL_FETCH,
  users,
});

export const fetching = () => ({
  type: BEGIN_FETCHING,
});

const randomUserId = () => Math.floor(10000000 * Math.random() + 100);

export const refreshSuggestion = (oldUser) => (
  dispatch => {
    fetch(`https://api.github.com/user/${randomUserId()}?access_token=${SECRET_GITHUB_TOKEN}`)
    .then(response => {
      if (response.status >= 400) {
        refreshSuggestion(oldUser);
      }
      return response.json();
    })
    .then(newUser => {
      if (newUser.message !== 'Not Found') {
        dispatch(replaceUser(newUser, oldUser));
      }
    });
  }
);

export const fetchUsers = () => {
  const newUsers = [];
  return dispatch => (
    fetch(`https://api.github.com/users?since=${randomUserId()}&access_token=${SECRET_GITHUB_TOKEN}`)
      .then(response => (response.json()))
      .then(users => {
        for (let i = 0; i < 3; i++) {
          newUsers.push(users[Math.floor(Math.random() * 30)]);
        }
        dispatch(fullFetch(newUsers));
      })
  );
};
