import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvsManagingCholesterolInteractiveCasePage } from './cvs-managing-cholesterol-interactive-case.page';

describe('CvsManagingCholesterolInteractiveCasePage', () => {
  let component: CvsManagingCholesterolInteractiveCasePage;
  let fixture: ComponentFixture<CvsManagingCholesterolInteractiveCasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsManagingCholesterolInteractiveCasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvsManagingCholesterolInteractiveCasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
