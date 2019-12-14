import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.sass']
})
export class ShortenerComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }
  oriUrl;
  ngOnInit() {
  }

  shortUrl(enterUrl){
    // alert(enterUrl)
    enterUrl = 'http://' + enterUrl;
    this.oriUrl = this.apiService.getShortener(enterUrl);
    console.log(this.oriUrl);
  }
}
