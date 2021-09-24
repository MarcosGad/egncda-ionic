import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificateMentalHealthPage } from './certificate-mental-health.page';

describe('CertificateMentalHealthPage', () => {
  let component: CertificateMentalHealthPage;
  let fixture: ComponentFixture<CertificateMentalHealthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateMentalHealthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateMentalHealthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
