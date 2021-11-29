import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
usersList=[]
todoList=[]
  constructor(private _httpServiceService:HttpServiceService) { }

  ngOnInit(): void {
    this._httpServiceService.getUsers().subscribe(res=>{
      this.usersList=res['data']
    console.log(res['data'])
    })
    this._httpServiceService.getTodo().subscribe(res=>{
      this.todoList=res['data']
      this.todoList.filter(el=>el.status=='completed')
    })
  }

}
