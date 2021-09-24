import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificateBasicsOfMedicalStatisticsPage } from './certificate-basics-of-medical-statistics.page';

describe('CertificateBasicsOfMedicalStatisticsPage', () => {
  let component: CertificateBasicsOfMedicalStatisticsPage;
  let fixture: ComponentFixture<CertificateBasicsOfMedicalStatisticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateBasicsOfMedicalStatisticsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateBasicsOfMedicalStatisticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
