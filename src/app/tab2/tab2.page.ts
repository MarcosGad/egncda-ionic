import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { AlertController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as CanvasJS from '../../assets/canvasjs.min.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  url = "https://egncda.com/";
  page;
  
  constructor(public http: HttpClient,
    public alertController: AlertController,
    public loading: LoadingService,
    public storage: Storage,
    private router :Router,
    private platform: Platform) {
      this.platform.backButton.subscribe(() => {
        this.router.navigateByUrl('/tab1');
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
         this.http.get(this.url+'api/redeemyourpointsforuser',{headers})
         .subscribe(res=>{
          let data = res;
          this.page = data;
          let chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            backgroundColor: "#A4A4A4",
          
            title:{
              fontColor: "#fff",
              text: ""
            },
            data: [{
            type: "spline",
            dataPoints: this.page
            }]
           });  
          chart.render();

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

}
