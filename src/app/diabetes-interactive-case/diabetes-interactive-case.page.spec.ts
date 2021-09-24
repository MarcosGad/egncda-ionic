import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiabetesInteractiveCasePage } from './diabetes-interactive-case.page';

describe('DiabetesInteractiveCasePage', () => {
  let component: DiabetesInteractiveCasePage;
  let fixture: ComponentFixture<DiabetesInteractiveCasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabetesInteractiveCasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiabetesInteractiveCasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
