import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { LoadingService } from '../services/loading.service';
import { AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oncology',
  templateUrl: './oncology.page.html',
  styleUrls: ['./oncology.page.scss'],
})
export class OncologyPage implements OnInit {

  url = "https://egncda.com/";
  page;


  constructor(public http: HttpClient,
    public storage: Storage,
    public alertController: AlertController,
    public loading: LoadingService,
    private router :Router,
    private platform: Platform) { 
      this.platform.backButton.subscribe(() => {
        this.router.navigateByUrl('/medical');
      });
    }

  ngOnInit() {
    this.getData();
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      message: 'There is an error. Try again',
      buttons: ['Cancel']
    });

    await alert.present();
  }

  getData(){
    return new Promise((resolve, reject) => { 
      this.storage.get('token').then((value) => {
        const headers = new HttpHeaders({'Authorization':'Bearer '+value});
       this.loading.present();
       this.http.get(this.url+'api/oncology',{headers})
       .subscribe(res=>{
        let data = res;
        this.page = data;
        this.loading.dismiss();
        resolve(data);
      },(err)=>{
         reject(err);
         this.errorAlert();
         this.loading.dismiss();
      }); 
     })
    })
  }


doRefresh(event) {
    this.getData();
  setTimeout(() => {
    event.target.complete();
  }, 2000);
}

get net()
{
  return LoadingService.net; 
}


}
