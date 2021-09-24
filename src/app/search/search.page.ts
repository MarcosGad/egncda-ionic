import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchQuery: string = "";
  url = "https://egncda.com/";
  page;
  searchQueryNotfound: boolean = false;


  constructor(private router :Router,
    private route: ActivatedRoute,
    public http: HttpClient,
    public alertController: AlertController,
    public loading: LoadingService) {
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.searchQuery = this.router.getCurrentNavigation().extras.state.searchQuery;
          this.page = [];
          this.getData();
        }
      })
      

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

    getData(){
      return new Promise((resolve, reject) => { 
         this.loading.present();
         this.http.get(this.url+'api/search/' + this.searchQuery)
         .subscribe(res=>{
          let data = res;
          this.page = data;
          if(this.page.length != 0)
          {
            this.searchQueryNotfound = false
          }else{
            this.searchQueryNotfound = true
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

    onSearch(event) {
      if (this.searchQuery.length > 0) {       
          this.getData();
      } 
    }

  get net()
  {
    return LoadingService.net; 
  }





}
