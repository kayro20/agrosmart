import React from 'react';
import Chartist from 'chartist';

var data = {
  labels: ['09:00', '14:00', '19:00', '00:00', '04:00'],
  series: [[15, 22, 20, 14, 13]]
}

var options = {
  low: 0,
  showArea: true
}

export default class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: '_' + Math.random().toString(32).split('.')[1]}
  }

  componentDidMount() {
    this.updateChart(this.props.data);
  }

  updateChart() {
    return new Chartist.Line('#' + this.state.id, data, options);
  }

  render() {
    return (
      <div className="ct-chart" id={this.state.id}/>
    );
  }
}
