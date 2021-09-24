import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiabetesInsulinTherapyPage } from './diabetes-insulin-therapy.page';

describe('DiabetesInsulinTherapyPage', () => {
  let component: DiabetesInsulinTherapyPage;
  let fixture: ComponentFixture<DiabetesInsulinTherapyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabetesInsulinTherapyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiabetesInsulinTherapyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
