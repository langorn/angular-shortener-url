import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../api.service';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.css']
})
export class ShortenerComponent implements OnInit {
  @Input() enterUrl;
  faCheckCircle = faCheckCircle
  constructor(
    private apiService: ApiService
  ) { }

  newUrl;
  fullUrl;
  ngOnInit() {
  }

  shortUrl(enterUrl){
    this.fullUrl = 'http://' + enterUrl;
    this.apiService.getShortener(enterUrl)
    .subscribe((res:any) => {
      if (res.shorturl) {
        this.newUrl = res.shorturl;
      }
      console.log(res.shorturl);
      console.log(this.newUrl);
    });
  }
}
