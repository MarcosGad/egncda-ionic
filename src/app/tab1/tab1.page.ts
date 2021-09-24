import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    loop: true,
    speed:400
  };

  url = "https://egncda.com/";
  page;
  
  constructor(private router : Router,
    public storage: Storage,
    public http: HttpClient,
    public alertController: AlertController) {
      this.getData();
    }

  openLoginPage(){
    this.storage.ready().then( () => {
      this.storage.get('token').then( (value) => {
        if(value != null){
          this.router.navigateByUrl('/home');
        }
        else{
          this.router.navigateByUrl('/login');
        }
      })
    })
  }

  getData(){
    return new Promise((resolve, reject) => { 
       this.http.get(this.url+'api/welcome')
       .subscribe(res=>{
        this.page = res;
        resolve(this.page);
      },(err)=>{
         reject(err);
         this.errorAlert();
      }); 
     })
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      message: 'There is an error. Try again',
      buttons: ['Cancel']
    });

    await alert.present();
  }

  openLoginPPage(){
    this.storage.ready().then( () => {
      this.storage.get('token').then( (value) => {
        if(value != null){
          this.router.navigateByUrl('/patient');
        }
        else{
          this.router.navigateByUrl('/login-p');
        }
      })
    })
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
