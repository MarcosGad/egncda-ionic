import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespiratoryAssessmentOfBronchialAsthmaSeverityControlPage } from './respiratory-assessment-of-bronchial-asthma-severity-control.page';

describe('RespiratoryAssessmentOfBronchialAsthmaSeverityControlPage', () => {
  let component: RespiratoryAssessmentOfBronchialAsthmaSeverityControlPage;
  let fixture: ComponentFixture<RespiratoryAssessmentOfBronchialAsthmaSeverityControlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryAssessmentOfBronchialAsthmaSeverityControlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespiratoryAssessmentOfBronchialAsthmaSeverityControlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
