import React from 'react';
import Utils from 'utils';

export default class Router extends React.Component {
  getView() {
    return require('views/' + Utils.getRoute()).default;
  }

  render() {
    var View = this.getView();
    return (
      <View />
    );
  }
}
