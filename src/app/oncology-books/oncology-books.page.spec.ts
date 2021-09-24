import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OncologyBooksPage } from './oncology-books.page';

describe('OncologyBooksPage', () => {
  let component: OncologyBooksPage;
  let fixture: ComponentFixture<OncologyBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OncologyBooksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OncologyBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
