import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController, AlertController, Platform } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoadingService } from '../services/loading.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  url = "https://egncda.com/";
  public token: any; 
  usertype: any;

  constructor(public http: HttpClient,
    public formBuilder: FormBuilder,
    public loading: LoadingService,
    public storage: Storage,
    public toastController: ToastController, 
    public alertController: AlertController,
    private router :Router,
    private platform: Platform) {
      this.platform.backButton.subscribe(() => {
        this.router.navigateByUrl('/tab1');
      });
    }

    ngOnInit() {
      this.ionicForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      })
    }

    async errorAlert() {
      const alert = await this.alertController.create({
        message: 'These credentials do not match our records',
        buttons: ['Cancel']
      });
  
      await alert.present();
    }

    async welcomeToast() {
      const toast = await this.toastController.create({
        message: 'Welcome login at Egncda',
        duration: 2000
      });
      toast.present();
    }

    async NeedEmailVerification() {
      const toast = await this.toastController.create({
        message: 'Please check your email and confirm the account',
        duration: 5000
      });
      toast.present();
    }

    submitForm() {
      this.isSubmitted = true;
      if (!this.ionicForm.valid) {
        return false;
      } else {
         return new Promise((resolve, reject) => { 
          this.loading.present();
          this.http.post(this.url+'api/login',this.ionicForm.value)
          .subscribe(res=>{
           let data = res;
           let EmailVerification = data['user']['email_verified_at']
           if (EmailVerification === null){
             this.NeedEmailVerification();
             this.router.navigateByUrl('/tab1');
             this.ionicForm.reset();
           }else {
            this.token = data['success']['token']
            this.usertype = data['user']['user_type']
            this.storage.set('token',this.token);
            LoadingService.loggedIn = true;
            this.getUserType();
           }
           this.loading.dismiss();
           resolve(data);
         },(err)=>{
            reject(err);
            this.loading.dismiss();
            this.errorAlert();
         }); 
        })

      }
    }

    async getUserType(){
          if(this.usertype == '1'){
            this.storage.set('userType','doc');
            LoadingService.userType = 'doc';
            this.router.navigateByUrl('/home');
            this.ionicForm.reset();
            }else if(this.usertype == '0'){
              this.storage.set('userType','patient');
              LoadingService.userType = 'patient';
              this.router.navigateByUrl('/patient');
              this.ionicForm.reset();
            }
            this.welcomeToast();
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
