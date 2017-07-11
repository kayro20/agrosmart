import React from 'react';
import LineChart from './lineareachart';

export default class WeatherForecast extends React.Component {
  render() {
    return(
        <div className="summary-content">
          <div className="row title">Previsão para Fazenda Banco Alfa</div>
          <div className="row forecast">
            { this.props.children }
          </div>
        </div>
    );
  }
}

WeatherForecast.WeatherCard = class WeatherCard extends React.Component {
  render() {
    return(
      <div className="col-sm-4 pivo">
        <div className="weather-card">
          <div className="title"><h4 className="car-title"> { this.props.title } </h4></div>
          <div className="pivo-icon">
          </div>
          <div className="card-block day">
            <i className={ this.props.iconDay + " fa-4x"}></i>
          </div>
          <div className="temperature">
            <div className="minmax"><span> { this.props.min } </span></div>
            <div className="average"><span> { this.props.average } </span></div>
            <div className="minmax"><span> { this.props.max } </span></div>
          </div>
          <LineChart
            data={this.props.graphData}
          />
          <div className="rain">
            <h4>Chuva</h4>
            <div className="rain-info">
              <div className="rain-chance">
                <i className={ this.props.rainIconLeft + " fa-3x" }></i>
                <span> { this.props.chance } </span>
              </div>
              <div className="rain-quantity">
                <i className={ this.props.rainIconRight + " fa-3x" }></i>
                <span> { this.props.quantity } </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
