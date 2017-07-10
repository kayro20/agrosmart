import React from 'react';

export class MultiCard extends React.Component {
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

export class SingleCard extends React.Component {
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

export default class Summary extends React.Component {
  render() {
    return(
      <div className="summary-content">
        <div className="row title">Estação Meteorológica</div>
        <div className="row cards">
          <MultiCard
            topIcon="wi wi-thermometer fa-4x" topText="Temperatura" topValue="21,09 ºC"
            bottomIcon="wi wi-humidity fa-4x" bottomText="Umidade" bottomValue="79%"
          />
          <MultiCard
            topIcon="fa fa-leaf fa-4x" topText="Ponto de Orvalho" topValue="17,11 ºC"
            bottomIcon="wi wi-showers fa-4x" bottomText="Chuva" bottomValue="0,0mm"
          />
          <SingleCard
            icon="wi wi-wind towards-128-deg fa-4x" text="Velocidade" value="10,9km/h"
            iconText="sudeste"
          />
          <SingleCard
            icon="wi wi-day-sunny fa-4x m-b-sm" text="Alta Luminosidade" value="540,9 W/m²"
            center={true}
          />
        </div>
        <div className="last-update">
          <p>Última atualização: 22 de Junho, 10:49</p>
        </div>
      </div>
    );
  }
}
