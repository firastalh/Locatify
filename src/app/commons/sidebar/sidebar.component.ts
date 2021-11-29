import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() toggleButton=new EventEmitter<Boolean>();
  toggleState=true;
  buttonPosition='37%';
  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu(){
    if (this.toggleState){
      this.buttonPosition='7%'
    }else{
      this.buttonPosition='37%'
    }
    this.toggleButton.emit(this.toggleState);
    this.toggleState=!this.toggleState;
    
  }

}
