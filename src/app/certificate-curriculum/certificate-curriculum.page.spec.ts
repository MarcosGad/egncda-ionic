import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificateCurriculumPage } from './certificate-curriculum.page';

describe('CertificateCurriculumPage', () => {
  let component: CertificateCurriculumPage;
  let fixture: ComponentFixture<CertificateCurriculumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateCurriculumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateCurriculumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
