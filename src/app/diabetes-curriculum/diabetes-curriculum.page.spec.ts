import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiabetesCurriculumPage } from './diabetes-curriculum.page';

describe('DiabetesCurriculumPage', () => {
  let component: DiabetesCurriculumPage;
  let fixture: ComponentFixture<DiabetesCurriculumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabetesCurriculumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiabetesCurriculumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
