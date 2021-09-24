import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiscellaneousBasicResourcesPage } from './miscellaneous-basic-resources.page';

describe('MiscellaneousBasicResourcesPage', () => {
  let component: MiscellaneousBasicResourcesPage;
  let fixture: ComponentFixture<MiscellaneousBasicResourcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscellaneousBasicResourcesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiscellaneousBasicResourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
