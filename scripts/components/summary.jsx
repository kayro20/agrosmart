import React from 'react';

export default class Summary extends React.Component {
  render() {
    return(
      <div className="summary-content">
        <div className="row title">Estação Meteorológica</div>
        <div className="row cards">
          { this.props.children }
        </div>
        <div className="last-update">
          <p>Última atualização: 22 de Junho, 10:49</p>
        </div>
      </div>
    );
  }
}

Summary.SingleCard = class SingleCard extends React.Component {
  render() {
    return(
      <div className="col-sm-3">
        <div className="card">
          <div className={"card-block" + (this.props.center ? ' center' : '')}>
            <div>
              <span className="icon-container">
                <i className={this.props.icon}></i>
                <span>{ this.props.iconText }</span>
              </span>
              <div className="info">
                <h4>{ this.props.text }</h4>
                <p><span>{ this.props.value }</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

Summary.MultiCard = class MultiCard extends React.Component {
  render() {
    return(
      <div className="col-sm-3">
        <div className="card">
          <div className="card-block">
            <div>
              <i className={this.props.topIcon}></i>
              <div className="info">
                <h4>{ this.props.topText }</h4>
                <p><span>{ this.props.topValue }</span></p>
              </div>
            </div>
            <div>
              <i className={this.props.bottomIcon}></i>
              <div className="info">
                <h4>{ this.props.bottomText }</h4>
                <p><span>{ this.props.bottomValue }</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
