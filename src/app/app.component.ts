import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingService } from '../app/services/loading.service';
import { Storage } from '@ionic/storage';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public storage: Storage,
    public alertController: AlertController,
    public toastController: ToastController,
    private router : Router,
    public network: Network
  ) {
    this.initializeApp();

    this.storage.ready().then( () => {
      this.storage.get('token').then( (value) => {
        if(value != null){
          LoadingService.loggedIn = true;
          this.storage.get('userType').then( (value) => {
            if(value == 'doc'){
              LoadingService.userType = 'doc';
            }
            else if(value == 'patient'){
              LoadingService.userType = 'patient';
            }
          })

        }
        else{
          LoadingService.loggedIn = false;
          LoadingService.userType = 'null';
        }
      })
    })

    this.network.onDisconnect().subscribe(()=>{
      this.massToast();
      LoadingService.net = 'off';
    });

    this.network.onConnect().subscribe(()=>{
      LoadingService.net = 'on';
    });

  }

  async massToast() {
    const toast = await this.toastController.create({
      message: 'You are not connected to the Internet',
      duration: 5000,
      cssClass: 'customToast',
    });
    toast.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async logout(){
    const alert = await this.alertController.create({
        message: 'Do you want to logout?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              this.router.navigateByUrl('/tab1');
            }
  
          }, {
            text: 'Yes',
            handler: () => {
              this.storage.remove('token').then( (value) => {
                LoadingService.loggedIn = false;
                LoadingService.userType = 'null';
                this.storage.remove('userType');
                this.router.navigateByUrl('/tab1');
              })
            }
          }
        ]
      });
  await alert.present();
}

  get loggedIn()
  {
    return LoadingService.loggedIn; 
  }

  get net()
  {
    return LoadingService.net; 
  }

  get userType()
  {
    return LoadingService.userType; 
  }

}
