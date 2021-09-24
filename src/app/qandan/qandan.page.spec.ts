import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QandanPage } from './qandan.page';

describe('QandanPage', () => {
  let component: QandanPage;
  let fixture: ComponentFixture<QandanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QandanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QandanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
