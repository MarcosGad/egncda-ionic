import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvsRiskAssessmentInHypertensionPage } from './cvs-risk-assessment-in-hypertension.page';

describe('CvsRiskAssessmentInHypertensionPage', () => {
  let component: CvsRiskAssessmentInHypertensionPage;
  let fixture: ComponentFixture<CvsRiskAssessmentInHypertensionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsRiskAssessmentInHypertensionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvsRiskAssessmentInHypertensionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
