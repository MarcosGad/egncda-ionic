import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiscellaneousUpdatesNewsPage } from './miscellaneous-updates-news.page';

describe('MiscellaneousUpdatesNewsPage', () => {
  let component: MiscellaneousUpdatesNewsPage;
  let fixture: ComponentFixture<MiscellaneousUpdatesNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscellaneousUpdatesNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiscellaneousUpdatesNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
