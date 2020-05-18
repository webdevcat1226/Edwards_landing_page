import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-age-chart-mobile-section',
  templateUrl: './age-chart-mobile-section.component.html',
  styleUrls: ['./age-chart-mobile-section.component.scss']
})
export class AgeChartMobileSectionComponent implements OnInit {

  constructor() { }

  value = 42;
  options: Options = {
    floor: 0,
    ceil: 100,
    showSelectionBar: true,
    getPointerColor: (value: number): string => {
      return 'transparent';
    },
    getSelectionBarColor: (value: number): string => {
      return '#C8102E';
    }
  };

  ngOnInit(): void {
  }

}
