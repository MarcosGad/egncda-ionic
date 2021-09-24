import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvsBooksPage } from './cvs-books.page';

describe('CvsBooksPage', () => {
  let component: CvsBooksPage;
  let fixture: ComponentFixture<CvsBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsBooksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvsBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
