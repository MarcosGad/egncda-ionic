import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OncologyCurriculumPage } from './oncology-curriculum.page';

describe('OncologyCurriculumPage', () => {
  let component: OncologyCurriculumPage;
  let fixture: ComponentFixture<OncologyCurriculumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OncologyCurriculumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OncologyCurriculumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
