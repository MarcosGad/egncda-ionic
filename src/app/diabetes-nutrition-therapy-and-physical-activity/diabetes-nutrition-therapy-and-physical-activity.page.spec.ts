import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiabetesNutritionTherapyAndPhysicalActivityPage } from './diabetes-nutrition-therapy-and-physical-activity.page';

describe('DiabetesNutritionTherapyAndPhysicalActivityPage', () => {
  let component: DiabetesNutritionTherapyAndPhysicalActivityPage;
  let fixture: ComponentFixture<DiabetesNutritionTherapyAndPhysicalActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabetesNutritionTherapyAndPhysicalActivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiabetesNutritionTherapyAndPhysicalActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
