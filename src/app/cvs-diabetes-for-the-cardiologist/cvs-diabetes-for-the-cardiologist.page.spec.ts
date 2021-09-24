import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvsDiabetesForTheCardiologistPage } from './cvs-diabetes-for-the-cardiologist.page';

describe('CvsDiabetesForTheCardiologistPage', () => {
  let component: CvsDiabetesForTheCardiologistPage;
  let fixture: ComponentFixture<CvsDiabetesForTheCardiologistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsDiabetesForTheCardiologistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvsDiabetesForTheCardiologistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
