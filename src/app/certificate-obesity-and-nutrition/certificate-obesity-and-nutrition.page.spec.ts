import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificateObesityAndNutritionPage } from './certificate-obesity-and-nutrition.page';

describe('CertificateObesityAndNutritionPage', () => {
  let component: CertificateObesityAndNutritionPage;
  let fixture: ComponentFixture<CertificateObesityAndNutritionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateObesityAndNutritionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateObesityAndNutritionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
