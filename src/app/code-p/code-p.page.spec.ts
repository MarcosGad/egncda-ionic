import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodePPage } from './code-p.page';

describe('CodePPage', () => {
  let component: CodePPage;
  let fixture: ComponentFixture<CodePPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodePPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodePPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
