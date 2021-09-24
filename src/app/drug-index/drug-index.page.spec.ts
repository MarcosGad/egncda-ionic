import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrugIndexPage } from './drug-index.page';

describe('DrugIndexPage', () => {
  let component: DrugIndexPage;
  let fixture: ComponentFixture<DrugIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrugIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
