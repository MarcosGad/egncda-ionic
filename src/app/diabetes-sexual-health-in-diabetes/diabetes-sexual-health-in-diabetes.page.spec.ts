import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiabetesSexualHealthInDiabetesPage } from './diabetes-sexual-health-in-diabetes.page';

describe('DiabetesSexualHealthInDiabetesPage', () => {
  let component: DiabetesSexualHealthInDiabetesPage;
  let fixture: ComponentFixture<DiabetesSexualHealthInDiabetesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabetesSexualHealthInDiabetesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiabetesSexualHealthInDiabetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
