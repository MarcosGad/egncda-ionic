import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespiratoryTttOfOsaMedicalAndSurgicalPage } from './respiratory-ttt-of-osa-medical-and-surgical.page';

describe('RespiratoryTttOfOsaMedicalAndSurgicalPage', () => {
  let component: RespiratoryTttOfOsaMedicalAndSurgicalPage;
  let fixture: ComponentFixture<RespiratoryTttOfOsaMedicalAndSurgicalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryTttOfOsaMedicalAndSurgicalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespiratoryTttOfOsaMedicalAndSurgicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
