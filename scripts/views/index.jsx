import React from 'react';
import Header from 'components/header';
import Summary from 'components/summary';
import InfoCard from 'components/card';

export default class Dashboard extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <div className="client-name">
        <h2>Fazenda Banco Alfa</h2>
      </div>
      <div className="wraper-content">
        <div className="container">
          <Summary />
          <InfoCard />
        </div>
      </div>
    </div>
    );
  }
}
