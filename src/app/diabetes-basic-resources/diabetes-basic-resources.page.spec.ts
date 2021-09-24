import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiabetesBasicResourcesPage } from './diabetes-basic-resources.page';

describe('DiabetesBasicResourcesPage', () => {
  let component: DiabetesBasicResourcesPage;
  let fixture: ComponentFixture<DiabetesBasicResourcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabetesBasicResourcesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiabetesBasicResourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
