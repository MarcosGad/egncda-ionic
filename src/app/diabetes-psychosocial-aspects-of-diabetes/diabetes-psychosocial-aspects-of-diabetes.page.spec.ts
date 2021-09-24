import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiabetesPsychosocialAspectsOfDiabetesPage } from './diabetes-psychosocial-aspects-of-diabetes.page';

describe('DiabetesPsychosocialAspectsOfDiabetesPage', () => {
  let component: DiabetesPsychosocialAspectsOfDiabetesPage;
  let fixture: ComponentFixture<DiabetesPsychosocialAspectsOfDiabetesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabetesPsychosocialAspectsOfDiabetesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiabetesPsychosocialAspectsOfDiabetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
