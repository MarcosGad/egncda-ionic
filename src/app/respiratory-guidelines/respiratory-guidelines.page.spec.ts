import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespiratoryGuidelinesPage } from './respiratory-guidelines.page';

describe('RespiratoryGuidelinesPage', () => {
  let component: RespiratoryGuidelinesPage;
  let fixture: ComponentFixture<RespiratoryGuidelinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryGuidelinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespiratoryGuidelinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
