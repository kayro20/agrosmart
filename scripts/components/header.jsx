import React from 'react';

export default class Header extends React.Component {
  render() {
    return(
      <div className="header-wrapper">
        <nav className="header">
          <div className="btn-menu"><button><i className="fa fa-bars"/></button></div>
          <img src={require('../../assets/images/logo-navbar.png')} alt="Logo verde"/>
          <div className="btn-notification"><button><i className="fa fa-envelope"/><span className="indicator">10</span></button></div>
        </nav>
      </div>
    );
  }
}