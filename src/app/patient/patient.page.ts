import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage implements OnInit {

  constructor(private platform: Platform,
    private router :Router) {
    this.platform.backButton.subscribe(() => {
      this.router.navigateByUrl('/tab1');
    });
   }

  ngOnInit() {
  }
  get net()
  {
    return LoadingService.net; 
  }
}
