import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfileInfoContactComponent } from './components/profile-info-contact/profile-info-contact.component';
import { ProfileInfoEducationComponent } from './components/profile-info-education/profile-info-education.component';
import { ProfileInfoPersonalComponent } from './components/profile-info-personal/profile-info-personal.component';
import { ProfileInfoExperienceComponent } from './components/profile-info-experience/profile-info-experience.component';
import { MatCardModule } from '@angular/material/card';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { SharedModule } from '../shared/shared.module';
import { EducationDataComponent } from './components/profile-info-education/education-data/education-data.component';
import { ContactDataComponent } from './components/profile-info-contact/contact-data/contact-data.component';
import { PersonalDataComponent } from './components/profile-info-personal/personal-data/personal-data.component';
import { ExperienceDataComponent } from './components/profile-info-experience/experience-data/experience-data.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileInfoComponent,
    ProfileInfoContactComponent,
    ProfileInfoEducationComponent,
    ProfileInfoPersonalComponent,
    ProfileInfoExperienceComponent,
    EducationDataComponent,
    ContactDataComponent,
    PersonalDataComponent,
    ExperienceDataComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    TranslateModule,
    MatCardModule,
    NgxJsonViewerModule,
    SharedModule
  ]
})
export class ProfileModule { }
