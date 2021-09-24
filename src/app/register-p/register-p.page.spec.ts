import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterPPage } from './register-p.page';

describe('RegisterPPage', () => {
  let component: RegisterPPage;
  let fixture: ComponentFixture<RegisterPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
