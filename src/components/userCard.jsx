/* eslint-disable camelcase */

import React, { Component, PropTypes } from 'react';

export default class UserCard extends Component {
  render() {
    const { avatar_url, html_url, name, login, handleClose } = this.props;

    return (
      <div>
        <img src={avatar_url} alt="avatar" className="avatar" />
        <div className="info-container">
          <span className="name">{name}</span><span className="handle">{login}</span>
          <a href={html_url} className="view-button">View</a>
        </div>
        <span className="close-button" onClick={handleClose}></span>
      </div>
    );
  }
}

UserCard.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};
