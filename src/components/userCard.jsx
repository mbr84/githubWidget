/* eslint-disable camelcase */

import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import { Button } from 'react-bootstrap';

const styles = {
  userCard: {
    width: '95%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '11px',
    '&:nth-last-of-type(1)': {
      paddingBottom: '5',
    },
  },
  imgContainer: {
    width: '18%',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: 'auto',
  },
  infoContainer: {
    width: '75%',
    fontSize: '13.5px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    transform: 'translateY(-3.5px)',
  },
  fullName: {
    fontWeight: '600',
  },
  handle: {
    fontWeight: '300',
  },
  topLine: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  closeButton: {
    cursor: 'pointer',
    alignSelf: 'flex-start',
    '&:focus': {
      outline: 'none',
    },
  },
  viewButton: {
    backgroundImage: 'linear-gradient(white 0%, #f5f8fb 100%)',
    padding: '3px 10px',
    borderRadius: '3px',
    border: '1px solid #e0e8ee',
    color: 'black',
    fontWeight: '600',
    fontSize: '13px',
  },
};

class UserCard extends Component {
  constructor(props) {
    super(props);

    this.replaceUser = this.replaceUser.bind(this);
  }

  replaceUser(user) {
    return () => {
      const { refreshSuggestion } = this.props;
      refreshSuggestion(user);
    };
  }
  render() {
    const { classes, user } = this.props;
    const { avatar_url, html_url, name, login } = user;

    return (
      <li className={classes.userCard}>
        <div className={classes.imgContainer}>
          <img src={avatar_url} alt="avatar" className={classes.avatar} />
        </div>
        <div className={classes.infoContainer}>
          <span className={classes.topLine}>
            <span>
              <span className={classes.fullName}>{name ? `${name} ` : ''}</span>
              <span className={classes.handle}>@{login}</span>
            </span>
            <button
              type="button"
              className={`${classes.closeButton} close`}
              aria-label="Close"
              onClick={this.replaceUser(user)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </span>
          <span>
            <Button
              bsSize="small"
              bsClass="profile-btn"
              href={html_url}
              className={classes.viewButton}
            >
              <i className="fa fa-github" aria-hidden="true"></i>
              &nbsp; View
            </Button>
          </span>
        </div>
      </li>
    );
  }
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  refreshSuggestion: PropTypes.func.isRequired,
};

export default injectSheet(styles)(UserCard);
