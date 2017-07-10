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
            <div className="icon-btn btn-notification">
              <button className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-envelope"/><span className="indicator">10</span></button>
              <ul className="dropdown-menu">
                <li>
                  <a href="http://cultivointeligente.com.br/inbox/mark_as_read">Marcar todas como lidas</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
