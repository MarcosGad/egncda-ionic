import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespiratoryBasicResourcesPage } from './respiratory-basic-resources.page';

describe('RespiratoryBasicResourcesPage', () => {
  let component: RespiratoryBasicResourcesPage;
  let fixture: ComponentFixture<RespiratoryBasicResourcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryBasicResourcesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespiratoryBasicResourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
