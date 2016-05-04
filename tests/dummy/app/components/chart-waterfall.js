/* global Highcharts */

import Ember from 'ember';

export default Ember.Component.extend({

  chartOptions: {
    chart: {
      type: 'waterfall'
    },

    title: {
      text: 'Highcharts Waterfall'
    },

    xAxis: {
      type: 'category'
    },

    yAxis: {
      title: {
        text: 'USD'
      }
    },

    legend: {
      enabled: false
    },

    tooltip: {
      pointFormat: '<b>${point.y:,.2f}</b> USD'
    }

  },

  chartData: [{
    upColor: '#90ed7d',
    color: '#f7a35c',
    data: [
      {
        name: 'Start',
        y: 120000
      },
      {
        name: 'Product Revenue',
        y: 569000
      },
      {
        name: 'Service Revenue',
        y: 231000
      },
      {
        name: 'Positive Balance',
        isIntermediateSum: true,
        color: '#434348'
      },
      {
        name: 'Fixed Costs',
        y: -342000
      },
      {
        name: 'Variable Costs',
        y: -233000
      },
      {
        name: 'Balance',
        isSum: true,
        color: '#5c5c61'
      }
    ],
    dataLabels: {
      enabled: true,
      formatter: function () {
        return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
      },
      style: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textShadow: '0px 0px 3px black'
      }
    },
    pointPading: 0
  }]

});
