import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-doctor-as-section',
  templateUrl: './doctor-as-section.component.html',
  styleUrls: ['./doctor-as-section.component.scss']
})
export class DoctorAsSectionComponent implements OnInit {

  constructor() {
  }

  normalSound = new Howl({
    src: ['assets/sounds/normal.mp3']
  });

  aspatientSound = new Howl({
    src: ['assets/sounds/aspatient.mp3']
  });

  normalSoundButtonClicked: boolean;
  aspatientSoundButtonClicked: boolean;

  // play normal sound
  normalSoundPlay() {
    this.aspatientSoundButtonClicked = false;
    this.aspatientSound.pause();

    this.normalSoundButtonClicked = this.normalSoundButtonClicked === false;
    if (this.normalSoundButtonClicked) {
      this.normalSound.currentTime = 0;
      this.normalSound.play();
    } else {
      this.normalSound.pause();
    }
  }

  aspatientSoundPlay() {
    this.normalSoundButtonClicked = false;
    this.normalSound.pause();

    this.aspatientSoundButtonClicked = this.aspatientSoundButtonClicked === false;
    if (this.aspatientSoundButtonClicked) {
      this.aspatientSound.currentTime = 0;
      this.aspatientSound.play();
    } else  {
      this.aspatientSound.pause();
    }
  }

  ngOnInit(): void {
    Howler.volume(1);
    this.normalSoundButtonClicked = false;
    this.aspatientSoundButtonClicked = true;
  }

}
