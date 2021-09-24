import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespiratoryGuidelinesOfManagementOfStableAsthmaAndExacerbationsPage } from './respiratory-guidelines-of-management-of-stable-asthma-and-exacerbations.page';

describe('RespiratoryGuidelinesOfManagementOfStableAsthmaAndExacerbationsPage', () => {
  let component: RespiratoryGuidelinesOfManagementOfStableAsthmaAndExacerbationsPage;
  let fixture: ComponentFixture<RespiratoryGuidelinesOfManagementOfStableAsthmaAndExacerbationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryGuidelinesOfManagementOfStableAsthmaAndExacerbationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespiratoryGuidelinesOfManagementOfStableAsthmaAndExacerbationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
