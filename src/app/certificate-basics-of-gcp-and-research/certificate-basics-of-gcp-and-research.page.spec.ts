import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificateBasicsOfGcpAndResearchPage } from './certificate-basics-of-gcp-and-research.page';

describe('CertificateBasicsOfGcpAndResearchPage', () => {
  let component: CertificateBasicsOfGcpAndResearchPage;
  let fixture: ComponentFixture<CertificateBasicsOfGcpAndResearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateBasicsOfGcpAndResearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateBasicsOfGcpAndResearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
