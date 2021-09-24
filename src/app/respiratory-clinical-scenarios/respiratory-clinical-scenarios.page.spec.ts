import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespiratoryClinicalScenariosPage } from './respiratory-clinical-scenarios.page';

describe('RespiratoryClinicalScenariosPage', () => {
  let component: RespiratoryClinicalScenariosPage;
  let fixture: ComponentFixture<RespiratoryClinicalScenariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryClinicalScenariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespiratoryClinicalScenariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
