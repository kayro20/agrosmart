import React from 'react';
import Chartist from 'chartist';

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
    return new Chartist.Line('#' + this.state.id, this.props.data, options);
  }

  render() {
    return (
      <div className="ct-chart" id={this.state.id}/>
    );
  }
}
