import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  @Input() post = {title: "", url:"/assets/img/post-image.png"};

  dateParse(dateValue: number): string {
    return new Date(dateValue).toLocaleDateString();
  }
}
