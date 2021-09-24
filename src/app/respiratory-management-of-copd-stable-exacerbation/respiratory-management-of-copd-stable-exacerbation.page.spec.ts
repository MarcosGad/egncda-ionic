import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespiratoryManagementOfCopdStableExacerbationPage } from './respiratory-management-of-copd-stable-exacerbation.page';

describe('RespiratoryManagementOfCopdStableExacerbationPage', () => {
  let component: RespiratoryManagementOfCopdStableExacerbationPage;
  let fixture: ComponentFixture<RespiratoryManagementOfCopdStableExacerbationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryManagementOfCopdStableExacerbationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespiratoryManagementOfCopdStableExacerbationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
