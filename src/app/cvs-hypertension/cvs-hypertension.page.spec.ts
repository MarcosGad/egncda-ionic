import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvsHypertensionPage } from './cvs-hypertension.page';

describe('CvsHypertensionPage', () => {
  let component: CvsHypertensionPage;
  let fixture: ComponentFixture<CvsHypertensionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsHypertensionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvsHypertensionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
