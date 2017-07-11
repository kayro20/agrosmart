import React from 'react';

let farms = [
  "Algar", "Amanda", "Banco Alfa", "Coca Cola",
  "Estufa Esalq", "Figueira Branca II", "Hernandes",
  "Jóia", "Manoel Viana", "Modelo 2", "Monsanto",
  "NDJ Israel - Avocado", "Palmeira", "Raízen",
  "Restinga", "Rincão", "Santa Colomba", "Soledad",
  "Sto Antônio da Estiva", "Terra Nova"
];

class SubmenuItem extends React.Component {
  render() {
    return <div>
      <a href={ this.props.route }>{ this.props.children }</a>
    </div>
  }
}

class SidebarMenuItem extends React.Component {
  onClick(event) {
    if (this.props.children) {
      event.preventDefault();
      this.setState({open: !this.state.open});
    }
  }

  getArrow() {
    if (!this.props.children) {
      return null;
    }

    if (this.state.open) {
      return <i className="chevron fa fa-chevron-down"/>;
    }

    return <i className="chevron fa fa-chevron-left"/>;
  }

  getSubmenu() {
    if (!this.props.children) {
      return null;
    }

    return <div className={"sidebar-submenu " + (this.state.open ? 'active' : '')}>
      { this.props.children }
    </div>
  }

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      <div className="sidebar-menu-item" href={this.props.route}>
        <div className="sidebar-main" onClick={this.onClick.bind(this)}>
          <i className={this.props.icon}/>
          <div className="item-text">
            { this.props.text }
          </div>
          { this.getArrow() }
        </div>
        { this.getSubmenu() }
      </div>
    );
  }
}

export default class Sidebar extends React.Component {
  toggle() {
    this.setState({show: !this.state.show});
  }

  componentDidMount() {
    $('.btn-menu').on('click', () => this.toggle());
  }

  constructor(props) {
    super(props);
    this.state = {show: null};
  }

  render() {
    let className = '';
    if (this.state.show !== null) {
      className = (this.state.show ? 'active' : 'inactive');
    }

    return (
      <aside className={"sidebar " + className}>
        <div className="sidebar-header">
          <img src={require('../../assets/images/logo_inverted.png')}/>
          <div className="dropdown">
            <div className="dropdown-toggle" data-toggle="dropdown">
              <h3>Celso Fernandes</h3>
              <div className="text-muted text-xs">
                Menu&nbsp;<b className="caret"></b>
              </div>
            </div>
            <ul className="dropdown-menu">
              <li>
                <a href="http://cultivointeligente.com.br/profile">Perfil</a>
              </li>
              <li className="divider"/>
              <li>
                <a href="http://cultivointeligente.com.br/users/sign_out">Sair</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-menu">
          <SidebarMenuItem icon="fa fa-th-large" text="Fazendas">
            {farms.map((farm, index) => {
              return (
                <SubmenuItem route={'http://cultivointeligente.com.br/farms/' + index} key={index}>
                  { farm }
                </SubmenuItem>
              );
            })}
          </SidebarMenuItem>
          <SidebarMenuItem icon="fa fa-dashboard" text="Dashboard Banco Alfa" route="http://cultivointeligente.com.br/farms/19"/>
          <SidebarMenuItem icon="fa fa-list-alt" text="Histórico" route="http://cultivointeligente.com.br/historical"/>
          <SidebarMenuItem icon="fa fa-sign-out" text="Sair" route="http://cultivointeligente.com.br/users/sign_out"/>
        </div>
      </aside>
    );
  }
}
