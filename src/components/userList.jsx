import React, { Component, PropTypes } from 'react';
import UserCard from './userCard';
import injectSheet from 'react-jss';

const styles = {
  widget: {
    width: '295px',
    padding: '0 15px',
    boxSizing: 'content-box',
    border: '1px solid #e0e8ee',
    borderRadius: '5px',
    margin: '20px 0 0 20px',
    outline: '6px solid #f5f8fb',
  },
  widgetHeader: {
    display: 'inline-block',
    fontWeight: '200',
    color: 'rgb(120,115,130)',
  },
};

class UserList extends Component {
  constructor(props) {
    super(props);

    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  refresh() {
    const { fetching, fetchUsers } = this.props;
    fetching();
    fetchUsers();
  }

  render() {
    const { classes, users, refreshSuggestion } = this.props;

    return (
      <div className={classes.widget} >
        <h4 className={classes.widgetHeader}>Who To Follow &nbsp;</h4>
        <span
          className="refresh-button"
          onClick={this.refresh}
        >
          Refresh
        </span>
        <ul className={classes.userList}>
          {users.map((user, idx) => (
            <UserCard
              key={idx}
              user={user}
              refreshSuggestion={refreshSuggestion}
            />
          ))}
        </ul>
      </div>
    );
  }
}

UserList.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  refreshSuggestion: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetching: PropTypes.func.isRequired,
};

export default injectSheet(styles)(UserList);
