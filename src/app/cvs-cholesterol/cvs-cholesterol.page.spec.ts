import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvsCholesterolPage } from './cvs-cholesterol.page';

describe('CvsCholesterolPage', () => {
  let component: CvsCholesterolPage;
  let fixture: ComponentFixture<CvsCholesterolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsCholesterolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvsCholesterolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
