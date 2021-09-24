import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvsSmokingAndHeartDiseasesPage } from './cvs-smoking-and-heart-diseases.page';

describe('CvsSmokingAndHeartDiseasesPage', () => {
  let component: CvsSmokingAndHeartDiseasesPage;
  let fixture: ComponentFixture<CvsSmokingAndHeartDiseasesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsSmokingAndHeartDiseasesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvsSmokingAndHeartDiseasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
