import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvsPage } from './cvs.page';

describe('CvsPage', () => {
  let component: CvsPage;
  let fixture: ComponentFixture<CvsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
