import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificateMiscellaneousPage } from './certificate-miscellaneous.page';

describe('CertificateMiscellaneousPage', () => {
  let component: CertificateMiscellaneousPage;
  let fixture: ComponentFixture<CertificateMiscellaneousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateMiscellaneousPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateMiscellaneousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
