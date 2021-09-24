import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiscellaneousCurriculumPage } from './miscellaneous-curriculum.page';

describe('MiscellaneousCurriculumPage', () => {
  let component: MiscellaneousCurriculumPage;
  let fixture: ComponentFixture<MiscellaneousCurriculumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscellaneousCurriculumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiscellaneousCurriculumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
