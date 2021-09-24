import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiscellaneousMentalHealthPage } from './miscellaneous-mental-health.page';

describe('MiscellaneousMentalHealthPage', () => {
  let component: MiscellaneousMentalHealthPage;
  let fixture: ComponentFixture<MiscellaneousMentalHealthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscellaneousMentalHealthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiscellaneousMentalHealthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
