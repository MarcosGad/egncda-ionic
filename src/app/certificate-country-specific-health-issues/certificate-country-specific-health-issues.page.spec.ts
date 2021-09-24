import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificateCountrySpecificHealthIssuesPage } from './certificate-country-specific-health-issues.page';

describe('CertificateCountrySpecificHealthIssuesPage', () => {
  let component: CertificateCountrySpecificHealthIssuesPage;
  let fixture: ComponentFixture<CertificateCountrySpecificHealthIssuesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateCountrySpecificHealthIssuesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateCountrySpecificHealthIssuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
