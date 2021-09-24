import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespiratoryClinicalManifestationAndScoringOfSleepDisorderedBreathingPage } from './respiratory-clinical-manifestation-and-scoring-of-sleep-disordered-breathing.page';

describe('RespiratoryClinicalManifestationAndScoringOfSleepDisorderedBreathingPage', () => {
  let component: RespiratoryClinicalManifestationAndScoringOfSleepDisorderedBreathingPage;
  let fixture: ComponentFixture<RespiratoryClinicalManifestationAndScoringOfSleepDisorderedBreathingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiratoryClinicalManifestationAndScoringOfSleepDisorderedBreathingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespiratoryClinicalManifestationAndScoringOfSleepDisorderedBreathingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
