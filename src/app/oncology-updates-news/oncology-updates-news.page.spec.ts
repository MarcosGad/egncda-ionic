import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OncologyUpdatesNewsPage } from './oncology-updates-news.page';

describe('OncologyUpdatesNewsPage', () => {
  let component: OncologyUpdatesNewsPage;
  let fixture: ComponentFixture<OncologyUpdatesNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OncologyUpdatesNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OncologyUpdatesNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
