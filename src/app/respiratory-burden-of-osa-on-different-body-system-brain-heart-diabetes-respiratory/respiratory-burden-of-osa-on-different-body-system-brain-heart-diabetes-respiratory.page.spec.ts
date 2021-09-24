import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespiratoryBurdenOfOsaOnDifferentBodySystemBrainHeartDiabetesRespiratoryPage } from './respiratory-burden-of-osa-on-different-body-system-brain-heart-diabetes-respiratory.page';

describe('RespiratoryBurdenOfOsaOnDifferentBodySystemBrainHeartDiabetesRespiratoryPage', () => {
  let component: RespiratoryBurdenOfOsaOnDifferentBodySystemBrainHeartDiabetesRespiratoryPage;
  let fixture: ComponentFixture<RespiratoryBurdenOfOsaOnDifferentBodySystemBrainHeartDiabetesRespiratoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryBurdenOfOsaOnDifferentBodySystemBrainHeartDiabetesRespiratoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespiratoryBurdenOfOsaOnDifferentBodySystemBrainHeartDiabetesRespiratoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
