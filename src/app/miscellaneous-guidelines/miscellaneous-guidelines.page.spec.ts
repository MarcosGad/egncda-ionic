import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiscellaneousGuidelinesPage } from './miscellaneous-guidelines.page';

describe('MiscellaneousGuidelinesPage', () => {
  let component: MiscellaneousGuidelinesPage;
  let fixture: ComponentFixture<MiscellaneousGuidelinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscellaneousGuidelinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiscellaneousGuidelinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
