import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespiratoryDiagnosisOfBronchialAsthmaHistoryClinicalExaminationSpirometryPage } from './respiratory-diagnosis-of-bronchial-asthma-history-clinical-examination-spirometry.page';

describe('RespiratoryDiagnosisOfBronchialAsthmaHistoryClinicalExaminationSpirometryPage', () => {
  let component: RespiratoryDiagnosisOfBronchialAsthmaHistoryClinicalExaminationSpirometryPage;
  let fixture: ComponentFixture<RespiratoryDiagnosisOfBronchialAsthmaHistoryClinicalExaminationSpirometryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryDiagnosisOfBronchialAsthmaHistoryClinicalExaminationSpirometryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespiratoryDiagnosisOfBronchialAsthmaHistoryClinicalExaminationSpirometryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
