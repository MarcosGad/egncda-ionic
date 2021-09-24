import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.page.html',
  styleUrls: ['./pdf.page.scss'],
})
export class PdfPage implements OnInit {
  url = "https://egncda.com/";
  link

  constructor(private router :Router,
    private route: ActivatedRoute) { 

      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.link = this.router.getCurrentNavigation().extras.state.link;
        }
      });

    }

  ngOnInit() {
  }

}
