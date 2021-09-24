import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificateExamPage } from './certificate-exam.page';

describe('CertificateExamPage', () => {
  let component: CertificateExamPage;
  let fixture: ComponentFixture<CertificateExamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateExamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateExamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
