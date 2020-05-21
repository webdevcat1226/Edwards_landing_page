import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-doctor-as-section',
  templateUrl: './doctor-as-section.component.html',
  styleUrls: ['./doctor-as-section.component.scss']
})
export class DoctorAsSectionComponent implements OnInit {

  constructor() { }

  normalSound = new Howl({
    src: ['assets/sounds/normal.mp3']
  });

  aspatientSound = new Howl({
    src: ['assets/sounds/aspatient.mp3']
  });

  normalSoundButtonClickCount: boolean;
  aspatientSoundButtonClickCount: boolean;

  // play normal sound
  normalSoundPlay() {
    this.aspatientSound.pause();
    this.aspatientSound.currentTime = 0;
    this.normalSound.play();
  }

  aspatientSoundPlay() {
    this.normalSound.pause();
    this.normalSound.currentTime = 0;
    this.aspatientSound.play();
  }

  ngOnInit(): void {
    Howler.volume(1);
  }

}
