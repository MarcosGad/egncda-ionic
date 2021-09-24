import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificateUpdatesNewsPage } from './certificate-updates-news.page';

describe('CertificateUpdatesNewsPage', () => {
  let component: CertificateUpdatesNewsPage;
  let fixture: ComponentFixture<CertificateUpdatesNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateUpdatesNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateUpdatesNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
