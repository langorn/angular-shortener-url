import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getShortener(url) {
    console.log(url);
    // return this.http.get('https://cutt.ly/api/api.php?key=dd779fc71877aeea0eeed74b31ce9ba2b2740&short='+url+')')
    return this.http.get('https://cutt.ly/api/api.php?key=dd779fc71877aeea0eeed74b31ce9ba2b2740&short='+url+')')
    .subscribe(res => res);
    
  }
}
