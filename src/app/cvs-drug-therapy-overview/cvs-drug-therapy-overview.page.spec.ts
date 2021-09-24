import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvsDrugTherapyOverviewPage } from './cvs-drug-therapy-overview.page';

describe('CvsDrugTherapyOverviewPage', () => {
  let component: CvsDrugTherapyOverviewPage;
  let fixture: ComponentFixture<CvsDrugTherapyOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsDrugTherapyOverviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvsDrugTherapyOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
