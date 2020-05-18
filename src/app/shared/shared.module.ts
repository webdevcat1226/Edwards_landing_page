import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { FindHospitalSectionComponent } from './find-hospital-section/find-hospital-section.component';
import { PayMethodSectionComponent } from './pay-method-section/pay-method-section.component';
import { DoctorAsSectionComponent } from './doctor-as-section/doctor-as-section.component';
import { PatientSectionComponent } from './patient-section/patient-section.component';
import { AgeChartSectionComponent } from './age-chart-section/age-chart-section.component';
import { HeartVideoSectionComponent } from './heart-video-section/heart-video-section.component';
import { MaterialInfoSectionComponent } from './material-info-section/material-info-section.component';
import { FormsModule } from '@angular/forms';
import { AgeChartMobileSectionComponent } from './age-chart-mobile-section/age-chart-mobile-section.component';
import { Ng5SliderModule } from 'ng5-slider';
import { AuscultationMobileSectionComponent } from './auscultation-mobile-section/auscultation-mobile-section.component';

@NgModule({
  declarations: [
    FooterComponent,
    FindHospitalSectionComponent,
    PayMethodSectionComponent,
    DoctorAsSectionComponent,
    PatientSectionComponent,
    AgeChartSectionComponent,
    HeartVideoSectionComponent,
    MaterialInfoSectionComponent,
    AgeChartMobileSectionComponent,
    AuscultationMobileSectionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng5SliderModule
  ],
  exports: [
    FooterComponent,
    FindHospitalSectionComponent,
    PayMethodSectionComponent,
    DoctorAsSectionComponent,
    PatientSectionComponent,
    AgeChartSectionComponent,
    HeartVideoSectionComponent,
    MaterialInfoSectionComponent,
    AgeChartMobileSectionComponent,
    AuscultationMobileSectionComponent
  ]
})
export class SharedModule { }
