import $ from 'jquery';

var Utils = {
  getRoute: function() {
    return location.pathname.slice(1) || 'index'
  },
};
export default Utils;
