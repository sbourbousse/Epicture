import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { ImgurService } from '../services/imgur.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',  
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private imgurService: ImgurService) {}
  posts = []
  ngOnInit() {
    this.getImages();
  }
  getImages() {
    this.imgurService.getHomeImages().subscribe((val: any) => {
      val.data.map(img => {
        if (img.images && img.images.length>0)
          if(img.images[0].type == "image/jpeg" || img.images[0].type == "image/png")
            this.posts.push({url : img.images[0].link, title: img.title, date: img.datetime*1000, favorite: img.favorite_count})
      }
      )})
    console.log(this.posts)
  }

}
