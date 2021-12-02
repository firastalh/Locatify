import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
@Input('newsAuthor') newsAuthor:string;
@Input('imageUrl') imageUrl:string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.imageUrl)
  }

}
