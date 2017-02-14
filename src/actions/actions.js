export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REMOVE_USER = 'REMOVE_USER';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
});

export const removeUser = user => ({
  type: REMOVE_USER,
  user,
});

const randomUserId = () => Math.floor(10000000 * Math.rand() + 100);

export const fetchUsers = () => {
  const newUsers = [];
  const fetchUser = (userId) => {
    fetch(`https://api.github.com/user/${userId}`)
      .then(response => {
        if (response.status >= 400) {
          fetchUser(randomUserId());
        }
        return response.json();
      })
      .then(json => {
        newUsers.push(json);
      });
  };

  return dispatch => {
    for (let i = 0; i < 6; i++) {
      fetchUser();
    }

    dispatch(receiveUsers(newUsers));
  };
};
