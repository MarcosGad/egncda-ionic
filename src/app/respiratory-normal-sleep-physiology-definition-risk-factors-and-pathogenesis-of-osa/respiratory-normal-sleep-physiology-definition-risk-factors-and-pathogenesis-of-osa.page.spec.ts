import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespiratoryNormalSleepPhysiologyDefinitionRiskFactorsAndPathogenesisOfOsaPage } from './respiratory-normal-sleep-physiology-definition-risk-factors-and-pathogenesis-of-osa.page';

describe('RespiratoryNormalSleepPhysiologyDefinitionRiskFactorsAndPathogenesisOfOsaPage', () => {
  let component: RespiratoryNormalSleepPhysiologyDefinitionRiskFactorsAndPathogenesisOfOsaPage;
  let fixture: ComponentFixture<RespiratoryNormalSleepPhysiologyDefinitionRiskFactorsAndPathogenesisOfOsaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryNormalSleepPhysiologyDefinitionRiskFactorsAndPathogenesisOfOsaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespiratoryNormalSleepPhysiologyDefinitionRiskFactorsAndPathogenesisOfOsaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
