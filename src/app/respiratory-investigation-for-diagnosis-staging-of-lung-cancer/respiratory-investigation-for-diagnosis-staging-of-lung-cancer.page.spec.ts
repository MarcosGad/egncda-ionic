import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespiratoryInvestigationForDiagnosisStagingOfLungCancerPage } from './respiratory-investigation-for-diagnosis-staging-of-lung-cancer.page';

describe('RespiratoryInvestigationForDiagnosisStagingOfLungCancerPage', () => {
  let component: RespiratoryInvestigationForDiagnosisStagingOfLungCancerPage;
  let fixture: ComponentFixture<RespiratoryInvestigationForDiagnosisStagingOfLungCancerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryInvestigationForDiagnosisStagingOfLungCancerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespiratoryInvestigationForDiagnosisStagingOfLungCancerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
