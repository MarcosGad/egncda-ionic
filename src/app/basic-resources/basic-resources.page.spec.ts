import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasicResourcesPage } from './basic-resources.page';

describe('BasicResourcesPage', () => {
  let component: BasicResourcesPage;
  let fixture: ComponentFixture<BasicResourcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicResourcesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasicResourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
