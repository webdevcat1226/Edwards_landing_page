import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-age-chart-section',
  templateUrl: './age-chart-section.component.html',
  styleUrls: ['./age-chart-section.component.scss']
})
export class AgeChartSectionComponent implements OnInit {

  value1: number;
  value2: number;
  // tslint:disable-next-line:variable-name
  _value1: number;
  // tslint:disable-next-line:variable-name
  _value2: number;

  constructor() {
    this.value1 = 2.8;
    this._value1 = 100 - this.value1;
    this.value2 = 13.1;
    this._value2 = 100 - this.value2;
  }


  doughnutChartLabels1: Label[] = ['value1', '_value2'];
  doughnutChartData1: MultiDataSet = [
    [2.8, 97.8]
  ];
  doughnutChartType1: ChartType = 'doughnut';
  doughnutChartLabels2: Label[] = ['value1', '_value2'];
  doughnutChartData2: MultiDataSet = [
    [13.1, 86.9]
  ];
  doughnutChartType2: ChartType = 'doughnut';
  doughnutChartColors = [
    'rgb(255, 0, 0, 1)',
    'rgb(192, 192, 192, 1)'
  ];

  ngOnInit(): void {
  }

}
