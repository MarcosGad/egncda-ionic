import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OncologyPage } from './oncology.page';

describe('OncologyPage', () => {
  let component: OncologyPage;
  let fixture: ComponentFixture<OncologyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OncologyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OncologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
