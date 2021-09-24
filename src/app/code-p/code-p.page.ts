import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-code-p',
  templateUrl: './code-p.page.html',
  styleUrls: ['./code-p.page.scss'],
})
export class CodePPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  url = "https://egncda.com/";

  constructor(public formBuilder: FormBuilder,
    public http: HttpClient,
    public loading: LoadingService,
    private router :Router,
    public alertController: AlertController,
    private platform: Platform) { 
      this.platform.backButton.subscribe(() => {
        this.router.navigateByUrl('/tab1');
      });
    }

    ngOnInit() {
      this.ionicForm = this.formBuilder.group({
        code: ['', [Validators.required]],
      })
    }

    async errorAlert() {
      const alert = await this.alertController.create({
        message: 'There is an error. Try again',
        buttons: ['Cancel']
      });
  
      await alert.present();
    }

    async wrongCode() {
      const alert = await this.alertController.create({
        message: 'The code you entered is incorrect. Try again',
        buttons: ['Cancel']
      });
  
      await alert.present();
    }

    submitForm() {
      this.isSubmitted = true;
      if (!this.ionicForm.valid) {
        return false;
      } else { 
         return new Promise((resolve, reject) => { 
          this.loading.present();
          this.http.post(this.url+'api/code',this.ionicForm.value)
          .subscribe(res=>{
           let data = res['status'];
           if(data){
              let navigationExtras: NavigationExtras = { state: { code: this.ionicForm.get('code').value }};
              this.router.navigate(['register-p'], navigationExtras);
              this.ionicForm.reset();
           }else{
              this.wrongCode();
           }
           this.loading.dismiss();
           resolve(data);
         },(err)=>{
            reject(err);
            this.errorAlert();
            this.loading.dismiss();
         }); 
        })
      }
    }
    get net()
    {
      return LoadingService.net; 
    }

}
