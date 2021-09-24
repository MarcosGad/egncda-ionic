import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(  private router :Router,
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
