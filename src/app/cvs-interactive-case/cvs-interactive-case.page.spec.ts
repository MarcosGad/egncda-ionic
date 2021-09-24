import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvsInteractiveCasePage } from './cvs-interactive-case.page';

describe('CvsInteractiveCasePage', () => {
  let component: CvsInteractiveCasePage;
  let fixture: ComponentFixture<CvsInteractiveCasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsInteractiveCasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvsInteractiveCasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
