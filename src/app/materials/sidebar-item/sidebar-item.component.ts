import { Attribute, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {
@Input('sideBarToggle') sideBarToggle:Boolean;
@Input('routerLink') routerLink:string;
  constructor(@Attribute('itemIcon') public itemIcon:string,@Attribute('itemName') public itemName:string) { }

  ngOnInit(): void {
  }

}
