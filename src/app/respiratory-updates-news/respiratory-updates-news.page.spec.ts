import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespiratoryUpdatesNewsPage } from './respiratory-updates-news.page';

describe('RespiratoryUpdatesNewsPage', () => {
  let component: RespiratoryUpdatesNewsPage;
  let fixture: ComponentFixture<RespiratoryUpdatesNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryUpdatesNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespiratoryUpdatesNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
