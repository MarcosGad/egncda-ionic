import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiabetesClinicalScenariosPage } from './diabetes-clinical-scenarios.page';

describe('DiabetesClinicalScenariosPage', () => {
  let component: DiabetesClinicalScenariosPage;
  let fixture: ComponentFixture<DiabetesClinicalScenariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabetesClinicalScenariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiabetesClinicalScenariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
