import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificatePhysicalExercisePage } from './certificate-physical-exercise.page';

describe('CertificatePhysicalExercisePage', () => {
  let component: CertificatePhysicalExercisePage;
  let fixture: ComponentFixture<CertificatePhysicalExercisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatePhysicalExercisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificatePhysicalExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
