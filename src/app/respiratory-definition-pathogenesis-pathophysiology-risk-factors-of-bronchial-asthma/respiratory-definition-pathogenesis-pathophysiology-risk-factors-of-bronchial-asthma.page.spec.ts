import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfBronchialAsthmaPage } from './respiratory-definition-pathogenesis-pathophysiology-risk-factors-of-bronchial-asthma.page';

describe('RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfBronchialAsthmaPage', () => {
  let component: RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfBronchialAsthmaPage;
  let fixture: ComponentFixture<RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfBronchialAsthmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfBronchialAsthmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfBronchialAsthmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
