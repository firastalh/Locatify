import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {
  activatePagination=[true,false,false,false]
  constructor(private _httpServiceService:HttpServiceService) { }
 booksList=[]
  ngOnInit(): void {
    this._httpServiceService.getBooks().subscribe(res=>{
      console.log(res['data'])
      this.booksList=res['data']
    })
  }
  setActivated(index:number){
this.activatePagination.fill(false)
this.activatePagination[index]=true
  }
}
