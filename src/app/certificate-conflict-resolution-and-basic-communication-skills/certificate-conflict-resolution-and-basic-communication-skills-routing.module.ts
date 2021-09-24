import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateConflictResolutionAndBasicCommunicationSkillsPage } from './certificate-conflict-resolution-and-basic-communication-skills.page';

const routes: Routes = [
  {
    path: '',
    component: CertificateConflictResolutionAndBasicCommunicationSkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateConflictResolutionAndBasicCommunicationSkillsPageRoutingModule {}
