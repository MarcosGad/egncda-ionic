import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificateDigitalHealthPage } from './certificate-digital-health.page';

describe('CertificateDigitalHealthPage', () => {
  let component: CertificateDigitalHealthPage;
  let fixture: ComponentFixture<CertificateDigitalHealthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateDigitalHealthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateDigitalHealthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
