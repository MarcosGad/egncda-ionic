import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { LoadingService } from '../services/loading.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from "@angular/forms";
import { Location } from "@angular/common";


@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.page.html',
  styleUrls: ['./surveys.page.scss'],
})
export class SurveysPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  url = "https://egncda.com/";
  page
  serv
  cat_id
  title
  questions
  scor
  answers = []
  data ={
    comment : String,
    cat_id : Number ,
    responses : [  ]
  }
  

  constructor(public http: HttpClient,
    public storage: Storage,
    public alertController: AlertController,
    public loading: LoadingService,
    private router :Router,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    public toastController: ToastController, 
    private location: Location) { 

      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.serv = this.router.getCurrentNavigation().extras.state.serv;
          this.cat_id = this.router.getCurrentNavigation().extras.state.cat_id;
        }
      });
      
    }

    async ngOnInit() {
      
      this.storage.get('token').then(async (value) => {
        const headers = new HttpHeaders({'Authorization':'Bearer '+value});
       this.loading.present();
       await this.http.get(this.url+'api/surveys/' + this.serv,{headers})
       .toPromise().then(res=>{
        let data = res;
        this.page = data;
        this.title = this.page['title'];
        this.questions = this.page['questions'];

        this.answers = []
        for (let i = 0; i < this.questions.length; i++) {
          this.answers.push(new FormControl('', Validators.required));
        }
        this.loading.dismiss();
      });

      this.ionicForm = this.formBuilder.group({
        comment: '00',
        cat_id: this.cat_id,
        answers: new FormArray(
          this.answers
        )
      });
    });
      
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
         this.http.get(this.url+'api/surveys/' + this.serv,{headers})
         .toPromise().then(res=>{
          let data = res;
          this.page = data;
          this.title = this.page['title'];
          this.questions = this.page['questions'];

          this.answers = []
          for (let i = 0; i < this.questions.length; i++) {
            this.answers.push(new FormControl('', Validators.required));
          }

          this.ionicForm = this.formBuilder.group({
            comment: ['', [Validators.required]],
            answers: new FormArray(
              this.answers
            )
          });
        
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

  async welcomeToast() {
    const toast = await this.toastController.create({
      message: 'Your Score ' + this.scor,
      duration: 2000
    });
    toast.present();
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      return false;
    } else {
       this.data.comment = this.ionicForm.value.comment;
       this.data.cat_id = this.ionicForm.value.cat_id;
       for (let item of this.ionicForm.value.answers) {
         this.data.responses.push({'answer_id': item});
       }
       return new Promise((resolve, reject) => { 
        this.storage.get('token').then((value) => {
          const headers = new HttpHeaders({'Authorization':'Bearer '+value});  
        this.loading.present();
        this.http.post(this.url+'api/surveys/' + this.serv,this.data,{headers})
        .subscribe(res=>{
         let data = res;
         this.scor = data
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
