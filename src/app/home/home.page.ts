import { Component, OnInit } from '@angular/core';
import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  faBriefcaseMedical = faBriefcaseMedical
  faShareAlt = faShareAlt
  
  constructor(private router : Router) { 
  }

  ngOnInit() {
  }

  openPageMedical(){
    this.router.navigateByUrl('/medical');
  }

  doRefresh(event) {
  setTimeout(() => {
    event.target.complete();
  }, 2000);
}
get net()
{
  return LoadingService.net; 
}


}
