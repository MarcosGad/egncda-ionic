import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiabetesManagementInChildrenAndAdolescentsWithDiabetesPage } from './diabetes-management-in-children-and-adolescents-with-diabetes.page';

describe('DiabetesManagementInChildrenAndAdolescentsWithDiabetesPage', () => {
  let component: DiabetesManagementInChildrenAndAdolescentsWithDiabetesPage;
  let fixture: ComponentFixture<DiabetesManagementInChildrenAndAdolescentsWithDiabetesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabetesManagementInChildrenAndAdolescentsWithDiabetesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiabetesManagementInChildrenAndAdolescentsWithDiabetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
