import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPPage } from './login-p.page';

describe('LoginPPage', () => {
  let component: LoginPPage;
  let fixture: ComponentFixture<LoginPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
