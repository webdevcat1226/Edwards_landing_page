import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-nearby-hospital-section',
  templateUrl: './nearby-hospital-section.component.html',
  styleUrls: ['./nearby-hospital-section.component.scss']
})
export class NearbyHospitalSectionComponent implements OnInit {

  constructor() {
  }

  map: mapboxgl.Map;
  style = 'mapbox://styles/iwanovich1234/ckadl3rts0k7b1iluu07re4l7';
  lat = 35.652832;
  lng = 139.769478;

  ngOnInit(): void {
    // @ts-ignore
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 8,
      center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }

}
