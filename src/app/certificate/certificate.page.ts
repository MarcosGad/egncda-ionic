import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { LoadingService } from '../services/loading.service';
import { AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.page.html',
  styleUrls: ['./certificate.page.scss'],
})
export class CertificatePage implements OnInit {
  
  url = "https://egncda.com/";
  page;
  desc;
  allExam; myExam;

  constructor(public http: HttpClient,
    public storage: Storage,
    public alertController: AlertController,
    public loading: LoadingService,
    private router :Router,
    private platform: Platform) {
      this.platform.backButton.subscribe(() => {
        this.router.navigateByUrl('/tab1');
      });
     }

  ngOnInit() {
    this.getDataDesc();
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      message: 'There is an error. Try again',
      buttons: ['Cancel']
    });

    await alert.present();
  }

  getDataDesc(){
    return new Promise((resolve, reject) => { 
      this.storage.get('token').then((value) => {
       const headers = new HttpHeaders({'Authorization':'Bearer '+value});
       this.loading.present();
       this.http.get(this.url+'api/certificate',{headers})
       .subscribe(res=>{
        this.desc = res;
        this.getData();
        this.loading.dismiss();
        resolve(this.desc);
      },(err)=>{
         reject(err);
         this.loading.dismiss();
         this.errorAlert();
      }); 
     })
    })
  }

  getData(){
    return new Promise((resolve, reject) => { 
      this.storage.get('token').then((value) => {
       const headers = new HttpHeaders({'Authorization':'Bearer '+value});
       this.http.get(this.url+'api/medical',{headers})
       .subscribe(res=>{
        let data = res;
        this.page = data['medical'];
        this.allExam = data['allExam'];
        this.myExam = data['myExam'];
        resolve(data);
      },(err)=>{
         reject(err);
         this.errorAlert();
      }); 
     })
    })
  }


doRefresh(event) {
    this.getDataDesc();
  setTimeout(() => {
    event.target.complete();
  }, 2000);
}

get net()
{
return LoadingService.net; 
}

}
