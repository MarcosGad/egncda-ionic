import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, AlertController, Platform } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from "@angular/forms";
import { LoadingService } from '../services/loading.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  url = "https://egncda.com/";
  public token: any; 
  code;

  constructor(public http: HttpClient,
    public formBuilder: FormBuilder,
    public loading: LoadingService,
    public storage: Storage,
    public toastController: ToastController, 
    public alertController: AlertController,
    private router :Router,
    private platform: Platform,
    private route: ActivatedRoute) { 
      this.platform.backButton.subscribe(() => {
        this.router.navigateByUrl('/login');
      });
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.code = this.router.getCurrentNavigation().extras.state.code;
        }
      });
    }
    

    ngOnInit() {
      this.ionicForm = this.formBuilder.group({
        first_name: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.maxLength(11)]],
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        c_password: ['', [Validators.required, Validators.minLength(6),this.equalto('password')]],
        user_type: 1,
        dr_id: 0,
        code: this.code
      })
    }

    async errorAlert() {
      const alert = await this.alertController.create({
        message: 'There is an error. Try again',
        buttons: ['Cancel']
      });
  
      await alert.present();
    }

    async welcomeToast() {
      const toast = await this.toastController.create({
        message: 'Please check your email and confirm the account',
        duration: 5000
      });
      toast.present();
    }

    equalto(field_name): ValidatorFn {
      return (control: AbstractControl): {[key: string]: any} => {
      
      let input = control.value;
      
      let isValid=control.root.value[field_name]==input
      if(!isValid) 
      return { 'equalTo': {isValid} }
      else 
      return null;
      };
      }

    submitForm() {
      this.isSubmitted = true;
      if (!this.ionicForm.valid) {
        return false;
      } else {
         return new Promise((resolve, reject) => { 
          this.loading.present();
          this.http.post(this.url+'api/register',this.ionicForm.value)
          .subscribe(res=>{
           let data = res;
           this.token = data['success']['token']
           this.loading.dismiss();
           this.welcomeToast();
           this.router.navigateByUrl('/tab1');
           this.ionicForm.reset();
           resolve(data);
         },(err)=>{
            reject(err);
            this.loading.dismiss();
            this.errorAlert();
         }); 
        })


      }
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
