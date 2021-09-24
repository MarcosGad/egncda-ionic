import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespiratoryRiskFactorsClassificationsAndClinicalManifestationsOfLungCancerPage } from './respiratory-risk-factors-classifications-and-clinical-manifestations-of-lung-cancer.page';

describe('RespiratoryRiskFactorsClassificationsAndClinicalManifestationsOfLungCancerPage', () => {
  let component: RespiratoryRiskFactorsClassificationsAndClinicalManifestationsOfLungCancerPage;
  let fixture: ComponentFixture<RespiratoryRiskFactorsClassificationsAndClinicalManifestationsOfLungCancerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryRiskFactorsClassificationsAndClinicalManifestationsOfLungCancerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespiratoryRiskFactorsClassificationsAndClinicalManifestationsOfLungCancerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
