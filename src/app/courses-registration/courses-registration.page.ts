import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController, AlertController, Platform } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoadingService } from '../services/loading.service';
import { Location } from "@angular/common";
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courses-registration',
  templateUrl: './courses-registration.page.html',
  styleUrls: ['./courses-registration.page.scss'],
})
export class CoursesRegistrationPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  url = "https://egncda.com/";

  constructor(public http: HttpClient,
    public formBuilder: FormBuilder,
    public loading: LoadingService,
    public storage: Storage,
    public toastController: ToastController, 
    public alertController: AlertController,
    private location: Location,
    private router :Router,
    private platform: Platform) {
      this.platform.backButton.subscribe(() => {
        this.router.navigateByUrl('/medical');
      });
     }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      middle_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      mr_mrs: ['', [Validators.required]],
      dr: ['', [Validators.required]],
      prof: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      passport: ['', [Validators.required]],
      affiliation: ['', [Validators.required]],
      mobile_no: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      type_of_attendance: ['', [Validators.required]],
      type_of_contribution_submitted: ['', [Validators.required]],
      title_of_the_contribution: ['', [Validators.required]],
      conference_fee: ['', [Validators.required]],
      conference_dinner: ['', [Validators.required]],
      total_amount: ['', [Validators.required]],
      money_order_issued_on: ['', [Validators.required]],
      money_order_issued_to: ['', [Validators.required]],
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
      message: 'The registration is done',
      duration: 2000
    });
    toast.present();
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      return false;
    } else {
       return new Promise((resolve, reject) => { 
        this.storage.get('token').then((value) => {
          const headers = new HttpHeaders({'Authorization':'Bearer '+value});  
        this.loading.present();
        this.http.post(this.url+'api/courses-registration',this.ionicForm.value,{headers})
        .subscribe(res=>{
         let data = res;
         this.loading.dismiss();
         this.welcomeToast();
         this.location.back();
         resolve(data);
       },(err)=>{
          reject(err);
          this.loading.dismiss();
          this.errorAlert();
       }); 
      }) 
      })

    }
  }

  get net()
{
  return LoadingService.net; 
}

}
