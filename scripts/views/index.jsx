import React from 'react';
import Header from 'components/header';
import Summary from 'components/summary';
import InfoCard from 'components/info-card';
import WeatherForecast from 'components/weather-forecast';
import Sidebar from 'components/sidebar';
import Footer from 'components/footer';

var data_one = {
  labels: ['09:00', '14:00', '19:00', '00:00', '04:00'],
  series: [[15, 22, 20, 14, 13]]
}
var data_two = {
  labels: ['09:00', '14:00', '19:00', '00:00', '04:00'],
  series: [[18, 25, 23, 15, 14]]
}
var data_three = {
  labels: ['09:00', '14:00', '19:00', '00:00', '04:00'],
  series: [[16, 23, 20, 15, 15]]
}

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
          <WeatherForecast>
            <WeatherForecast.WeatherCard
              title="Segunda-feira"
              iconDay="wi wi-day-cloudy"
              min="13ºC"
              average="22ºC"
              max="28ºC"
              rainIconLeft="wi wi-umbrella"
              rainIconRight="wi wi-raindrop"
              chance="55%"
              quantity="2,0mm"
              graphData = {data_one}
            />
            <WeatherForecast.WeatherCard
              title="Terça-feira"
              iconDay="wi wi-day-sunny"
              min="15ºC"
              average="26ºC"
              max="30ºC"
              rainIconLeft="wi wi-umbrella"
              rainIconRight="wi wi-raindrop"
              chance="5%"
              quantity="0,0mm"
              graphData = {data_two}
            />
            <WeatherForecast.WeatherCard
              title="Quarta-feira"
              iconDay="wi wi-day-rain"
              min="14ºC"
              average="23ºC"
              max="27ºC"
              rainIconLeft="wi wi-umbrella"
              rainIconRight="wi wi-raindrop"
              chance="80%"
              quantity="2,5mm "
              graphData = {data_three}
            />
          </WeatherForecast>
          <InfoCard>
            <InfoCard.Pivo
              title="Pivo 1"
              background="https://storage.googleapis.com/vai-agrosmart/uploads/field/image/image/215/thumb_Pivo1.png"
              culture="Milho A."
              phase="Produção"
              status="Não irrigar"
            />
            <InfoCard.Pivo
              title="Pivo 2"
              background="https://storage.googleapis.com/vai-agrosmart/uploads/field/image/image/216/thumb_Pivo2.png"
              culture="Milho B."
              phase="Produção"
              status="Irrigar"
            />
            <InfoCard.Pivo
              title="Pivo 3"
              background="https://storage.googleapis.com/vai-agrosmart/uploads/field/image/image/217/thumb_Pivo3.png"
              culture="Milho C."
              phase="Cultivo"
              status="Não irrigar"
            />
            <InfoCard.Pivo
              title="Pivo 4"
              background="https://storage.googleapis.com/vai-agrosmart/uploads/field/image/image/218/thumb_Pivo4.png"
              culture="Milho D."
              phase="Produção"
              status="Não irrigar"
            />
            <InfoCard.Pivo
              title="Pivo 5"
              background="https://storage.googleapis.com/vai-agrosmart/uploads/field/image/image/219/thumb_Pivo5.png"
              culture="Milho A."
              phase="Crescimento"
              status="Não irrigar"
            />
            <InfoCard.Pivo
              title="Pivo 6"
              background="https://storage.googleapis.com/vai-agrosmart/uploads/field/image/image/220/thumb_Pivo6.png"
              culture="Milho A."
              phase="Produção"
              status="Não irrigar"
            />
            <InfoCard.Pivo
              title="Pivo 7"
              background="https://storage.googleapis.com/vai-agrosmart/uploads/field/image/image/221/thumb_Pivo7.png"
              culture="Milho A."
              phase="Produção"
              status="Não irrigar"
            />
          </InfoCard>
        </div>
      </div>
      <Footer />
    </div>
    );
  }
}
