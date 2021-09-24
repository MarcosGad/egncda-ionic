import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiabetesIntroductionToNcdSAndBurdenOfDiabetesPage } from './diabetes-introduction-to-ncd-s-and-burden-of-diabetes.page';

describe('DiabetesIntroductionToNcdSAndBurdenOfDiabetesPage', () => {
  let component: DiabetesIntroductionToNcdSAndBurdenOfDiabetesPage;
  let fixture: ComponentFixture<DiabetesIntroductionToNcdSAndBurdenOfDiabetesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabetesIntroductionToNcdSAndBurdenOfDiabetesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiabetesIntroductionToNcdSAndBurdenOfDiabetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
