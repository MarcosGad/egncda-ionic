import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificateConflictResolutionAndBasicCommunicationSkillsPage } from './certificate-conflict-resolution-and-basic-communication-skills.page';

describe('CertificateConflictResolutionAndBasicCommunicationSkillsPage', () => {
  let component: CertificateConflictResolutionAndBasicCommunicationSkillsPage;
  let fixture: ComponentFixture<CertificateConflictResolutionAndBasicCommunicationSkillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateConflictResolutionAndBasicCommunicationSkillsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateConflictResolutionAndBasicCommunicationSkillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
