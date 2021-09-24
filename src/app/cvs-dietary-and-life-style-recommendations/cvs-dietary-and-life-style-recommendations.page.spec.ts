import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvsDietaryAndLifeStyleRecommendationsPage } from './cvs-dietary-and-life-style-recommendations.page';

describe('CvsDietaryAndLifeStyleRecommendationsPage', () => {
  let component: CvsDietaryAndLifeStyleRecommendationsPage;
  let fixture: ComponentFixture<CvsDietaryAndLifeStyleRecommendationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsDietaryAndLifeStyleRecommendationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvsDietaryAndLifeStyleRecommendationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
