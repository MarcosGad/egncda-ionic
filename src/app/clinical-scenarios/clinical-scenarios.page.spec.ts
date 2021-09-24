import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClinicalScenariosPage } from './clinical-scenarios.page';

describe('ClinicalScenariosPage', () => {
  let component: ClinicalScenariosPage;
  let fixture: ComponentFixture<ClinicalScenariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalScenariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClinicalScenariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
