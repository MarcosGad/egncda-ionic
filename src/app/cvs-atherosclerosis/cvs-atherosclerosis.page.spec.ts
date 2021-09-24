import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvsAtherosclerosisPage } from './cvs-atherosclerosis.page';

describe('CvsAtherosclerosisPage', () => {
  let component: CvsAtherosclerosisPage;
  let fixture: ComponentFixture<CvsAtherosclerosisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsAtherosclerosisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvsAtherosclerosisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
