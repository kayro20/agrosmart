import React from 'react';

class SidebarMenuItem extends React.Component {
  render() {
    return (
      <a className="sidebar-menu-item" href={this.props.route}>
        <i className={this.props.icon}/>
        <div className="item-content">
          { this.props.text }
        </div>
      </a>
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
          <SidebarMenuItem icon="fa fa-th-large" text="Fazendas"/>
          <SidebarMenuItem icon="fa fa-dashboard" text="Dashboard Banco Alfa" route="http://cultivointeligente.com.br/farms/19"/>
          <SidebarMenuItem icon="fa fa-list-alt" text="Histórico" route="http://cultivointeligente.com.br/historical"/>
          <SidebarMenuItem icon="fa fa-sign-out" text="Sair" route="http://cultivointeligente.com.br/users/sign_out"/>
        </div>
      </aside>
    );
  }
}
