import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificateGuidelinesPage } from './certificate-guidelines.page';

describe('CertificateGuidelinesPage', () => {
  let component: CertificateGuidelinesPage;
  let fixture: ComponentFixture<CertificateGuidelinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateGuidelinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateGuidelinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
