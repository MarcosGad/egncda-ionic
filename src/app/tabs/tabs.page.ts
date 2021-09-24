import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, AlertController } from '@ionic/angular';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor( 
    private router : Router,
    public storage: Storage,
    public alertController: AlertController,
    public toastController: ToastController,
    ) {}


get loggedIn()
{
  return LoadingService.loggedIn; 
}

}
