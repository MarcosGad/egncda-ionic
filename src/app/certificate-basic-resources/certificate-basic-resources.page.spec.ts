import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificateBasicResourcesPage } from './certificate-basic-resources.page';

describe('CertificateBasicResourcesPage', () => {
  let component: CertificateBasicResourcesPage;
  let fixture: ComponentFixture<CertificateBasicResourcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateBasicResourcesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateBasicResourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
