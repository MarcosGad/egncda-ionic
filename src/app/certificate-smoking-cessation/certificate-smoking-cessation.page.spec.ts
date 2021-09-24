import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificateSmokingCessationPage } from './certificate-smoking-cessation.page';

describe('CertificateSmokingCessationPage', () => {
  let component: CertificateSmokingCessationPage;
  let fixture: ComponentFixture<CertificateSmokingCessationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateSmokingCessationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateSmokingCessationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
