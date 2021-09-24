import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OncologyExamPage } from './oncology-exam.page';

describe('OncologyExamPage', () => {
  let component: OncologyExamPage;
  let fixture: ComponentFixture<OncologyExamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OncologyExamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OncologyExamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
