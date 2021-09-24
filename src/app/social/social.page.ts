import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {

  constructor(private router :Router,
    private platform: Platform) {
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
