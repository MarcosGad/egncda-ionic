import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiscellaneousClinicalScenariosPage } from './miscellaneous-clinical-scenarios.page';

describe('MiscellaneousClinicalScenariosPage', () => {
  let component: MiscellaneousClinicalScenariosPage;
  let fixture: ComponentFixture<MiscellaneousClinicalScenariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscellaneousClinicalScenariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiscellaneousClinicalScenariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
