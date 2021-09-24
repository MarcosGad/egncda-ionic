import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespiratoryDiagnosisOfOsaInterpretationOfSleepReportPage } from './respiratory-diagnosis-of-osa-interpretation-of-sleep-report.page';

describe('RespiratoryDiagnosisOfOsaInterpretationOfSleepReportPage', () => {
  let component: RespiratoryDiagnosisOfOsaInterpretationOfSleepReportPage;
  let fixture: ComponentFixture<RespiratoryDiagnosisOfOsaInterpretationOfSleepReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryDiagnosisOfOsaInterpretationOfSleepReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespiratoryDiagnosisOfOsaInterpretationOfSleepReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
