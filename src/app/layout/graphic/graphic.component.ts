import { Component, OnInit } from '@angular/core';
declare var google : any;
@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Visitations', { role: 'style' } ],
          ['', 30, 'color: gray; opacity: 0.8'],
          ['', 40, 'color: gray; opacity: 0.8'],
          ['', 60, 'color: gray; opacity: 0.8'],
          ['', 30, 'color: gray; opacity: 0.8'],
          ['', 45, 'color: gray; opacity: 0.8'],
          ['', 40, 'color: gray; opacity: 0.8'],
          ['', 28, 'color: gray; opacity: 0.8']

        ]);
    
      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);
    
      var options = {
        width: 600,
        height: 400,
        bar: {groupWidth: "55%"},
        legend: { position: "left" }
       
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
      chart.draw(view, options);
    }

    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart1);

      function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales'],
          ['2004',  0, ],
          ['2005',  50, ],
          ['2006',  160,   ],
          ['2007',  0, ],
          ['2008',  200, ],
          ['2009',  0, ]




        ]);

        var options = {
          title: 'Lorem ipsum',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }

      google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart2);
      function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['',     67],
          ['',      33]
          
        ]);

        var options = {
          title: 'Taux diplômé/Cycle',
          pieHole: 0,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);

       
      }
      google.charts.load("current", {
        "packages":["map"],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        "mapsApiKey": "AIzaSyASQhB3bPOU5_8I2VFaV9mW0WIFgKZJqpg"
      });
      google.charts.setOnLoadCallback(drawChart4);
      function drawChart4() {
        var data = google.visualization.arrayToDataTable([
          ['Lat', 'Long', 'Name'],
          [14.7405626, -17.4387363, 'Volkeno']
          
         
        ]);

        var map = new google.visualization.Map(document.getElementById('map_div'));
        map.draw(data, {
          showTooltip: true,
          showInfoWindow: true
        });
      }

      

}
}
