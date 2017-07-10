import React from 'react';
import Header from 'components/header';
import Summary from 'components/summary';
import InfoCard from 'components/info-card';
import WeatherForecast from 'components/weather-forecast';
import Sidebar from 'components/sidebar';

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
          <Summary />
          <WeatherForecast />
          <InfoCard />
        </div>
      </div>
    </div>
    );
  }
}
