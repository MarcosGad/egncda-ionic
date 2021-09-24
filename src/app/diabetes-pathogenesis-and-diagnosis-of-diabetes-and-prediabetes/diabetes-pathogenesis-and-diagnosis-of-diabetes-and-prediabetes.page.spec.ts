import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiabetesPathogenesisAndDiagnosisOfDiabetesAndPrediabetesPage } from './diabetes-pathogenesis-and-diagnosis-of-diabetes-and-prediabetes.page';

describe('DiabetesPathogenesisAndDiagnosisOfDiabetesAndPrediabetesPage', () => {
  let component: DiabetesPathogenesisAndDiagnosisOfDiabetesAndPrediabetesPage;
  let fixture: ComponentFixture<DiabetesPathogenesisAndDiagnosisOfDiabetesAndPrediabetesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabetesPathogenesisAndDiagnosisOfDiabetesAndPrediabetesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiabetesPathogenesisAndDiagnosisOfDiabetesAndPrediabetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
