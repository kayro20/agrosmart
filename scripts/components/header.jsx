import React from 'react';

export default class Header extends React.Component {
  render() {
    return(
      <nav className="navbar-fixed-top">
        <div className="header-wrapper">
          <div className="header">
            <div className="btn-menu agromenu">
              <button><i className="fa fa-bars"/></button>
            </div>
            <img src={require('../../assets/images/logo-navbar.png')} alt="Logo verde"/>
            <div className="icon-btn btn-notification"><button><i className="fa fa-envelope"/><span className="indicator">10</span></button></div>
          </div>
        </div>
      </nav>
    );
  }
}
