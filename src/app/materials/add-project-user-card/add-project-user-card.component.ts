import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-project-user-card',
  templateUrl: './add-project-user-card.component.html',
  styleUrls: ['./add-project-user-card.component.scss']
})
export class AddProjectUserCardComponent implements OnInit {
  @Input('userName') userName:string;
  constructor() { }

  ngOnInit(): void {
  }

}
