import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';

import { FooterComponent } from './footer/footer.component';
import { FindHospitalSectionComponent } from './find-hospital-section/find-hospital-section.component';
import { PayMethodSectionComponent } from './pay-method-section/pay-method-section.component';
import { DoctorAsSectionComponent } from './doctor-as-section/doctor-as-section.component';
import { PatientSectionComponent } from './patient-section/patient-section.component';
import { AgeChartSectionComponent } from './age-chart-section/age-chart-section.component';
import { HeartVideoSectionComponent } from './heart-video-section/heart-video-section.component';
import { MaterialInfoSectionComponent } from './material-info-section/material-info-section.component';
import { AgeChartMobileSectionComponent } from './age-chart-mobile-section/age-chart-mobile-section.component';
import { AuscultationMobileSectionComponent } from './auscultation-mobile-section/auscultation-mobile-section.component';
import { NearbyHospitalSectionComponent } from './nearby-hospital-section/nearby-hospital-section.component';
import { MedicalInstitutionListSectionComponent } from './medical-institution-list-section/medical-institution-list-section.component';

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
    NearbyHospitalSectionComponent,
    MedicalInstitutionListSectionComponent,
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
    AuscultationMobileSectionComponent,
    NearbyHospitalSectionComponent,
    MedicalInstitutionListSectionComponent
  ]
})
export class SharedModule { }
