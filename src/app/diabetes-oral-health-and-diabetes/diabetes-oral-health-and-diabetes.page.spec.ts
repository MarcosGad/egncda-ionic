import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiabetesOralHealthAndDiabetesPage } from './diabetes-oral-health-and-diabetes.page';

describe('DiabetesOralHealthAndDiabetesPage', () => {
  let component: DiabetesOralHealthAndDiabetesPage;
  let fixture: ComponentFixture<DiabetesOralHealthAndDiabetesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabetesOralHealthAndDiabetesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiabetesOralHealthAndDiabetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
