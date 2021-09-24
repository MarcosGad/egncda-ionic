import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfCopdPage } from './respiratory-definition-pathogenesis-pathophysiology-risk-factors-of-copd.page';

describe('RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfCopdPage', () => {
  let component: RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfCopdPage;
  let fixture: ComponentFixture<RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfCopdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfCopdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfCopdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
