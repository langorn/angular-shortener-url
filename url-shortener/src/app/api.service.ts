import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getShortener(enterUrl) {
    console.log(enterUrl);
    // return this.http.get('https://cutt.ly/api/api.php?key=dd779fc71877aeea0eeed74b31ce9ba2b2740&short='+enterUrl+')')
    // choose this one because it no need to register . just a simple http request, no cors issues;
    return this.http.get('https://v.gd/create.php?format=json&url='+enterUrl)
  }
}
