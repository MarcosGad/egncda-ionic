import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { LoadingService } from '../services/loading.service';
import { AlertController, Platform } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {

  url = "https://egncda.com/";
  page;
  scoure;
  allExam; myExam;
  case;

  constructor(public http: HttpClient,
    public storage: Storage,
    public alertController: AlertController,
    public loading: LoadingService,
    private router :Router,
    private platform: Platform) { 
      this.platform.backButton.subscribe(() => {
        this.router.navigateByUrl('/cvs');
      });
    }

  ngOnInit() {
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      message: 'There is an error. Try again',
      buttons: ['Cancel']
    });

    await alert.present();
  }

  async completed() {
    const alert = await this.alertController.create({
      message: 'This exam has been completed',
      buttons: ['Cancel']
    });

    await alert.present();
  }

  getData(){
    return new Promise((resolve, reject) => { 
      this.storage.get('token').then((value) => {
        const headers = new HttpHeaders({'Authorization':'Bearer '+value});
       this.loading.present();
       this.http.get(this.url+'api/exam',{headers})
       .subscribe(res=>{
        let data = res;
        this.page = data['questionnaires'];
        this.scoure = data['scoure'];
        this.allExam = data['allExam'];
        this.myExam = data['myExam'];
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

openEx(id,title){

  let str = title;
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9 -]/g, '') 
  .replace(/\s+/g, '-') 
  .replace(/-+/g, '-'); 

    this.storage.get('token').then((value) => {
      const headers = new HttpHeaders({'Authorization':'Bearer '+value});
     this.loading.present();
     this.http.get(this.url+'api/case/' + id,{headers})
     .subscribe(res=>{
      let data = res;        
      
      if(data == 1)
      {
          this.completed();
      }else if(data == 0){
        let navigationExtras: NavigationExtras = { state: { serv: id + '-' +str, cat_id: 1 }};
        this.router.navigate(['surveys'], navigationExtras);
      }

      this.loading.dismiss();
    },(err)=>{
       this.errorAlert();
       this.loading.dismiss();
    }); 
   })

}

get net()
{
  return LoadingService.net; 
}

ionViewWillEnter() {
  this.page = [];
  this.scoure = '';
  this.getData();
}


}
