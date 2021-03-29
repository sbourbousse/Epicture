import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgurService {

  constructor(private http: HttpClient) { }

  getHomeImages() {
    return this.http.get("https://api.imgur.com/3/gallery/hot/viral/0.json");
  }
}
