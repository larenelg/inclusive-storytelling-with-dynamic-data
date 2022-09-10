var colors = Highcharts.getOptions().colors;

Highcharts.chart('bank-chart-1', {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Monthly income and expenses, Q1 2022-2024'
  },
  xAxis: {
      categories: [
          'Jul, 2022',
          'Aug, 2022',
          'Sep, 2022'
      ],
  },
  yAxis: {
      title: {
        text: 'Amount',
      },
      labels: {
        formatter: function () {
          const label = this.axis.defaultLabelFormatter.call(this);

          const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'AUD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });

          return formatter.format(label);
        }
      }
  },
  accessibility: {
      point: {
          valueDescriptionFormat: '{point.category}, $A{point.y}, {point.name}'
      }
  },
  tooltip: {
      formatter: function () {
          const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'AUD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });

          return '<b>' + this.x + '</b><br/>' +
              this.series.name + ': ' + formatter.format(this.y);
      }
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [{
      name: 'Incoming',
      data: [1293, 1928, 1293]

  }, {
      name: 'Outgoing',
      data: [382, 2310, 1003]

  }]
});