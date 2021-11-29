import { Component, ElementRef, OnChanges, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Loc';
  @ViewChild('sideBarRef') sideBarRef:ElementRef;
  // sidebarWidth='65px';
  // routerContainerWidth='calc(100% - 65px)';
  // routerContainerLeft='65px';
  sidebarWidth
  routerContainerWidth
   routerContainerLeft
  sideBarToggle;
  getScreenWidth: number;
  getScreenHeight: number;
  constructor(private _rendrer:Renderer2,private _elementRef:ElementRef){

  }
  ngOnInit():void{
  //   this.getScreenWidth = window.innerWidth;
  //     this.getScreenHeight = window.innerHeight;
  //     console.log(this.getScreenHeight,' ',this.getScreenWidth)
  //     if(this.getScreenWidth>=782){
  //       this.sidebarWidth='65px';
  // this.routerContainerWidth='calc(100% - 65px)'
  // this.routerContainerLeft='65px'
  //     }else{
  //       this.sidebarWidth='100%';
  //       this.routerContainerWidth='100%';
  //       this.routerContainerLeft='0'
  //     }
  }
 
  toggleMenu(event){
    this.sideBarToggle=event;
    if(event){
      this.sidebarWidth='220px'
      this.routerContainerWidth='calc(100% - 220px)'
      this.routerContainerLeft='220px';
    }else{
      this.sidebarWidth='65px'
      this.routerContainerLeft='65px';
      this.routerContainerWidth='calc(100% - 65px)'
    }
  }
}
