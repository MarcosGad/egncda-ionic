import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificateConflictResolutionAndBasicCommunicationSkillsPageRoutingModule } from './certificate-conflict-resolution-and-basic-communication-skills-routing.module';

import { CertificateConflictResolutionAndBasicCommunicationSkillsPage } from './certificate-conflict-resolution-and-basic-communication-skills.page';
import { MainPipe } from '../pipes/main-pipe.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificateConflictResolutionAndBasicCommunicationSkillsPageRoutingModule,
    MainPipe
  ],
  declarations: [CertificateConflictResolutionAndBasicCommunicationSkillsPage]
})
export class CertificateConflictResolutionAndBasicCommunicationSkillsPageModule {}
