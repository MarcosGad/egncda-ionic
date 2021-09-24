import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificateBooksPage } from './certificate-books.page';

describe('CertificateBooksPage', () => {
  let component: CertificateBooksPage;
  let fixture: ComponentFixture<CertificateBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateBooksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
