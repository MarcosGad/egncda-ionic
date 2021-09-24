import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiabetesGuidelinesPage } from './diabetes-guidelines.page';

describe('DiabetesGuidelinesPage', () => {
  let component: DiabetesGuidelinesPage;
  let fixture: ComponentFixture<DiabetesGuidelinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabetesGuidelinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiabetesGuidelinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
