import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button as ReactstrapButton } from 'reactstrap';
import { Navbar } from 'reactstrap';

const DropdownButton = styled(ReactstrapButton)`
${(props) => `
  &.btn {
    border: 1px solid ${props.theme.$color};
    float: left;
    background-color: ${props.theme.$color};
  }
`}
`

const NavbarTop = styled.nav`
  background: white;
  position: fixed;

  .header-wrapper {
    background: white;
    display: table;
    width: 100%;
    border-bottom: solid 1px rgba(0, 0, 0, 0.08);
  }

  .header {
    text-align: center;
    height: 61px;
    vertical-align: middle;
    display: table-cell;
    padding: 0 10px;

    .icon-btn {
      padding: 10px;
    }

    .agromenu {
      margin: 10px;
    }

    button {
      padding: 5px 13px;
      border: none;
      border-radius: 3px;
      color: white;
    }

    .btn-notification {
      float: right;
      position: relative;
      button {
        background: white;
        i {
          color: #b3b3b3;
          font-size: 18px;
        }
        span {
          background: rgba(248, 172, 89, 0.78);
          padding: 0 5px;
          font-size: 12px;
          border-radius: 2px;
          position: absolute;
          top: 5px;
          right: 12px;
        }
      }
    }
  }

  .dropdown-menu-right li a {
    font-size: 13px;
    font-weight: 600;

    i {
      padding-right: 5px;
      color: #2cb971;
    }
  }

`;

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: false,
      color: 'white',
    }
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    var custom = document.getElementById('color').value;
    this.setState({ toggle: !this.state.toggle, color: custom });
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <NavbarTop className="navbar-fixed-top">
          <div className="header-wrapper">
            <div className="header">
              <div className="btn-menu agromenu">
                <DropdownButton color={this.state.color}><i className="fa fa-bars"/></DropdownButton>
              </div>
              <img src={require('../../assets/images/logo-navbar.png')} alt="Logo verde"/>
              <div className="icon-btn btn-notification">
                <button className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-envelope"/><span className="indicator">10</span></button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li>
                    <a href="http://cultivointeligente.com.br/inbox/mark_as_read">
                      <i className="fa fa-envelope-open"></i>
                      Marcar todas como lidas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </NavbarTop>
      </div>
    );
  }
}
