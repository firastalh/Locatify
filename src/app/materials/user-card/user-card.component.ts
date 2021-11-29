import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
@Input('userName') userName:string;
@Input('tickEnabled') tickEnabled:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
