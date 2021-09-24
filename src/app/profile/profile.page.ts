import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { Storage } from '@ionic/storage';
import { ToastController, AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  url = "https://www.egncda.com/";
  user: FormGroup;
  userData;
  cash:boolean;
  mss;

  constructor( 
    public storage: Storage,
    public alertController: AlertController,
    public toastController: ToastController,
    private router : Router,
    public loading: LoadingService,
    public http: HttpClient,
    private platform: Platform) { 
      this.userData = {};
      this.platform.backButton.subscribe(() => {
        this.router.navigateByUrl('/tab1');
      });
    }

  ngOnInit() {
    this.user = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(11)]),
      password: new FormControl('', [Validators.minLength(6)]),
      new_password: new FormControl('', [Validators.minLength(6)])     
      }); 
  }

  ionViewWillEnter(){
    this.cash = true;
    this.getData();
  }

  getData(){
    return new Promise((resolve, reject) => { 
      this.storage.get('token').then((value) => {
      const headers = new HttpHeaders({'Authorization':'Bearer '+value});
       this.loading.present();
       this.http.get(this.url+'api/allDetails',{headers})
       .subscribe(res=>{
        let data = res;
        this.userData = data
        this.loading.dismiss();
        this.cash = false
        resolve(data);
      },(err)=>{
         reject(err);
         this.errorAlert();
         this.loading.dismiss();
         this.cash = false
      }); 
     })
    })
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      message: 'There is an error. Try again',
      buttons: ['Cancel']
    });
    await alert.present();
  }

  async goodAlert() {
    const alert = await this.alertController.create({
      message: this.mss,
      buttons: ['Cancel']
    });
    await alert.present();
  }

  edit(){
    return new Promise((resolve, reject) => { 
      this.storage.get('token').then((value) => {
      const headers = new HttpHeaders({'Authorization':'Bearer '+value});
      this.loading.present();
       this.http.post(this.url+'api/editUser',{
        first_name : this.userData.first_name,
        email : this.userData.email,
        phone : this.userData.phone,
        password : this.userData.password,
        new_password : this.userData.new_password,
       },{headers})
       .subscribe(res=>{
        let data = res;
        this.mss = data;
        this.loading.dismiss();
        this.goodAlert();
        this.getData();
        resolve(data);
      },(err)=>{
         reject(err);
         this.errorAlert();
         this.loading.dismiss();
      }); 
     })
    })
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
  
doRefresh(event) {
    this.getData();
  setTimeout(() => {
    event.target.complete();
  }, 2000);
}

}
