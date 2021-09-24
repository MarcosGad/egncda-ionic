import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatesNewsPage } from './updates-news.page';

describe('UpdatesNewsPage', () => {
  let component: UpdatesNewsPage;
  let fixture: ComponentFixture<UpdatesNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatesNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
