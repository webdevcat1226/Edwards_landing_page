import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-info-section',
  templateUrl: './material-info-section.component.html',
  styleUrls: ['./material-info-section.component.scss']
})
export class MaterialInfoSectionComponent implements OnInit {

  constructor() { }

  selected_material = 'initial doc';

  isSubmitted : boolean;

  sendForm() {
    this.isSubmitted = true;
    console.log("clicked", this.isSubmitted);
  }

  getIsSubmitted() {
    return this.isSubmitted;
  }
  ngOnInit(): void {
    this.isSubmitted = false;
  }

}
