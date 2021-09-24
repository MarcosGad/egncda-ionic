import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvsIntroductionToNcdSAndBurdenOfCvDiseasesPage } from './cvs-introduction-to-ncd-s-and-burden-of-cv-diseases.page';

describe('CvsIntroductionToNcdSAndBurdenOfCvDiseasesPage', () => {
  let component: CvsIntroductionToNcdSAndBurdenOfCvDiseasesPage;
  let fixture: ComponentFixture<CvsIntroductionToNcdSAndBurdenOfCvDiseasesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsIntroductionToNcdSAndBurdenOfCvDiseasesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvsIntroductionToNcdSAndBurdenOfCvDiseasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
