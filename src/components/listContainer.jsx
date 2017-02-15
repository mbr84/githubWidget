import { fetchUsers, refreshSuggestion, fetchUser, fetching } from '../actions/actions.js';
import { connect } from 'react-redux';
import UserList from './userList.jsx';


const mapStateToProps = state => ({
  users: state.users,
  isFetching: true,
  state,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
  refreshSuggestion: (oldUser) => dispatch(refreshSuggestion(oldUser)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetching: () => dispatch(fetching()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
