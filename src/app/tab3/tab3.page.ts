import { Component } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  url = "https://egncda.com/";
  page;

  constructor(private router :Router,
    private platform: Platform,
    public http: HttpClient,
    public alertController: AlertController,
    public loading: LoadingService,
    ) {
    this.platform.backButton.subscribe(() => {
      this.router.navigateByUrl('/tab1');
    });
    this.getData();
  }

  ngOnInit() {}

  getData(){
    return new Promise((resolve, reject) => { 
       this.loading.present();
       this.http.get(this.url+'api/about-as')
       .subscribe(res=>{
        this.page = res;
        this.loading.dismiss();
        resolve(this.page);
      },(err)=>{
         reject(err);
         this.errorAlert();
         this.loading.dismiss();
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
  
  get net()
  {
    return LoadingService.net; 
  }

}
