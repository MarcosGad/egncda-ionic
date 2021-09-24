import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvsLatestGuidelinesOfHypertensionPage } from './cvs-latest-guidelines-of-hypertension.page';

describe('CvsLatestGuidelinesOfHypertensionPage', () => {
  let component: CvsLatestGuidelinesOfHypertensionPage;
  let fixture: ComponentFixture<CvsLatestGuidelinesOfHypertensionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsLatestGuidelinesOfHypertensionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvsLatestGuidelinesOfHypertensionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
