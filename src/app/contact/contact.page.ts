import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, AlertController, Platform } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoadingService } from '../services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  url = "https://egncda.com/";

  constructor(public http: HttpClient,
    public formBuilder: FormBuilder,
    public loading: LoadingService,
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
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        message: ['', [Validators.required]],
      })  
      
    }

    async welcomeToast() {
      const toast = await this.toastController.create({
        message: 'The email has been sent, Thank You',
        duration: 5000
      });
      toast.present();
    }
  
    async errorAlert() {
      const alert = await this.alertController.create({
        message: 'There is an error. Try again',
        buttons: ['Close']
      });
  
      await alert.present();
    }

    submitForm() {
      this.isSubmitted = true;
      if (!this.ionicForm.valid) {
        return false;
      } else {
        this.loading.present();
        this.http.post(this.url+'api/contact',this.ionicForm.value)
        .subscribe(res=>{
         let data = res;
         this.loading.dismiss();
         this.welcomeToast();
         this.router.navigateByUrl('/tab1');
       },(err)=>{
          this.loading.dismiss();
          this.errorAlert();
       });      

      }
    }

    get net()
    {
      return LoadingService.net; 
    }

}