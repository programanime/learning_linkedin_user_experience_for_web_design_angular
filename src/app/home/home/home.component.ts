import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '@app/shared/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private seoService:SeoService) { }
  ngOnInit(): void {
    this.seoService.updateDescription("this home page has the basic description");
  }
}
