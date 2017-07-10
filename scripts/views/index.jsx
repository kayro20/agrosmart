import React from 'react';
import Header from 'components/header';
import Summary from 'components/summary';
import InfoCard from 'components/info-card';
import WeatherForecast from 'components/weather-forecast';
import Sidebar from 'components/sidebar';
import Footer from 'components/footer';

export default class Dashboard extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <div className="client-name">
        <h2>Fazenda Banco Alfa</h2>
      </div>
      <div className="wraper-content">
        <Sidebar />
        <div className="container">
          <Summary>
            <Summary.MultiCard
              topIcon="wi wi-thermometer fa-4x" topText="Temperatura" topValue="21,09 ºC"
              bottomIcon="wi wi-humidity fa-4x" bottomText="Umidade" bottomValue="79%"
            />
            <Summary.MultiCard
              topIcon="fa fa-leaf fa-4x" topText="Ponto de Orvalho" topValue="17,11 ºC"
              bottomIcon="wi wi-showers fa-4x" bottomText="Chuva" bottomValue="0,0mm"
            />
            <Summary.SingleCard
              icon="wi wi-wind towards-128-deg fa-4x" text="Velocidade" value="10,9km/h"
              iconText="sudeste"
            />
            <Summary.SingleCard
              icon="wi wi-day-sunny fa-4x m-b-sm" text="Alta Luminosidade" value="540,9 W/m²"
              center={true}
            />
          </Summary>
          <WeatherForecast />
          <InfoCard />
        </div>
      </div>
      <Footer />
    </div>
    );
  }
}
