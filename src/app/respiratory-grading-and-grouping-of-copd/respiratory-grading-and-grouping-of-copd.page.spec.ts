import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespiratoryGradingAndGroupingOfCopdPage } from './respiratory-grading-and-grouping-of-copd.page';

describe('RespiratoryGradingAndGroupingOfCopdPage', () => {
  let component: RespiratoryGradingAndGroupingOfCopdPage;
  let fixture: ComponentFixture<RespiratoryGradingAndGroupingOfCopdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryGradingAndGroupingOfCopdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespiratoryGradingAndGroupingOfCopdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
