import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OncologyGuidelinesPage } from './oncology-guidelines.page';

describe('OncologyGuidelinesPage', () => {
  let component: OncologyGuidelinesPage;
  let fixture: ComponentFixture<OncologyGuidelinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OncologyGuidelinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OncologyGuidelinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
