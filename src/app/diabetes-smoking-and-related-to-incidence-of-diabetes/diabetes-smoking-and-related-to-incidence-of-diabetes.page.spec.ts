import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiabetesSmokingAndRelatedToIncidenceOfDiabetesPage } from './diabetes-smoking-and-related-to-incidence-of-diabetes.page';

describe('DiabetesSmokingAndRelatedToIncidenceOfDiabetesPage', () => {
  let component: DiabetesSmokingAndRelatedToIncidenceOfDiabetesPage;
  let fixture: ComponentFixture<DiabetesSmokingAndRelatedToIncidenceOfDiabetesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabetesSmokingAndRelatedToIncidenceOfDiabetesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiabetesSmokingAndRelatedToIncidenceOfDiabetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
