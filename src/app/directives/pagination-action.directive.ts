import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPaginationAction]'
})
export class PaginationActionDirective implements OnInit {

  constructor(private _rendrer:Renderer2,private _elementRef:ElementRef) { }
  @HostListener('click') paginationAction(){
    
  }
ngOnInit():void{

}
}
