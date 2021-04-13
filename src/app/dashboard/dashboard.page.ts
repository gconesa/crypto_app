import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public lineChartData = [
    { data: [240, 110, 180, 100, 250, 300], label: 'Series A' },
    { data: [130, 220, 190, 130, 240, 290], label: 'Series B' },
  ];
  public lineChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  public lineChartOptions = {
    responsive: true,
    animation: {
      duration: 1000,
    },
    legend: { display: false },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{ gridLines: false,
        ticks: {
          fontColor: '#b3b8be'
        }
      }],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          
          ticks: {
            beginAtZero:true,
            stepSize: 100,
            fontColor: '#b3b8be'
        },
        gridLines: {
          drawBorder: false,
      }
        },
      ],
      legend: { display: false },
      grid: {
        display: false
      },
    }
  };
  public lineChartColors  = [
    { // grey
      fill: false,
      borderColor: '#3761ff',
      pointRadius: 0
    },
    { // light blue
      backgroundColor: '#d7dfff',
      borderColor: '#d7dfff',
      pointRadius: 0
     
    },
   
  ];

  linedataMiniChart = [
    { data: [40, 160, 120, 120, 250, 270]}];
  
  linedataMiniChartDown = [
      { data: [180, 140, 0, 120, 250, 270]}];

  optionsMiniChart = {
      responsive: true,
      legend: { display: false },
      bezierCurve:false, //remove curves from your plot
      scaleShowLabels : false, //remove labels
      tooltipEvents:[], //remove trigger from tooltips so they will'nt be show
      pointDot : false, //remove the points markers
      scaleShowGridLines: true, //set to false to remove the grids background,
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        xAxes: [{ gridLines: false,
          ticks: {
            fontColor: '#b3b8be'
          }
        }],
        yAxes: [
          {
            
          position: 'left',
          display: false, 
          ticks: {
              beginAtZero:true
          },
          gridLines: false
        },
        ],
        legend: { display: false },
        grid: {
          display: false
        },
      },
  }

  public lineMiniChartColors  = [
    { // light blue
      backgroundColor: '#5dcb7c',
      borderColor: '#5dcb7c',
      pointRadius: 0
     
    },
   
  ];

  
  public lineChartLegend = true;
  public lineChartType = 'line';
  constructor() { }

  ngOnInit() {
  }

}
