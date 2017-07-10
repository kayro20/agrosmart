import React from 'react';

class WeatherCard extends React.Component {
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

export default class WeatherForecast extends React.Component {
  render() {
    return(
        <div className="summary-content">
          <div className="row title">Previsão para São Bernardo do Sul</div>
          <div className="row forecast">
            <WeatherCard
              title="Segunda-feira"
              iconDay="wi wi-day-cloudy"
              min="13ºC"
              average="22ºC"
              max="28ºC"
              rainIconLeft="wi wi-umbrella"
              rainIconRight="wi wi-raindrop"
              chance="55%"
              quantity="2,0mm"
            />
            <WeatherCard
              title="Terça-feira"
              iconDay="wi wi-day-sunny"
              min="15ºC"
              average="26ºC"
              max="30ºC"
              rainIconLeft="wi wi-umbrella"
              rainIconRight="wi wi-raindrop"
              chance="5%"
              quantity="0,0mm"
            />
            <WeatherCard
              title="Quarta-feira"
              iconDay="wi wi-day-rain"
              min="14ºC"
              average="23ºC"
              max="27ºC"
              rainIconLeft="wi wi-umbrella"
              rainIconRight="wi wi-raindrop"
              chance="80%"
              quantity="2,5mm "
            />
          </div>
        </div>
    );
  }
}
