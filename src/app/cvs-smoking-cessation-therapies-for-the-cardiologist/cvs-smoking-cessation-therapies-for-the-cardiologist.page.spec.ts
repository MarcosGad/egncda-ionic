import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvsSmokingCessationTherapiesForTheCardiologistPage } from './cvs-smoking-cessation-therapies-for-the-cardiologist.page';

describe('CvsSmokingCessationTherapiesForTheCardiologistPage', () => {
  let component: CvsSmokingCessationTherapiesForTheCardiologistPage;
  let fixture: ComponentFixture<CvsSmokingCessationTherapiesForTheCardiologistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsSmokingCessationTherapiesForTheCardiologistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvsSmokingCessationTherapiesForTheCardiologistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
