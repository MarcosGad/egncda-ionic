import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OncologyClinicalScenariosPage } from './oncology-clinical-scenarios.page';

describe('OncologyClinicalScenariosPage', () => {
  let component: OncologyClinicalScenariosPage;
  let fixture: ComponentFixture<OncologyClinicalScenariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OncologyClinicalScenariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OncologyClinicalScenariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
