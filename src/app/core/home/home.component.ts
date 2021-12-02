import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
usersList=[]
usersListPage=[]
activePage=[]
todoList=[]
numberOfUserPages:number;

numberPages=[];
  constructor(private _httpServiceService:HttpServiceService) { }

  ngOnInit(): void {
    this._httpServiceService.getUsers().subscribe(res=>{
      this.usersList=res['data']
      this.initializePages()
    })
    this._httpServiceService.getTodo().subscribe(res=>{
      this.todoList=res['data']
      this.todoList.filter(el=>el.status=='completed')
    })
  }
  changePage(index){
    let firstItem=(index-1)*6;
    this.usersListPage=this.usersList.slice(firstItem,index*6)
    this.activePage.fill(false)
    this.activePage[index-1]=true
    console.log( this.activePage)
    console.log('index',index)
  }
  initializePages(){
    this.usersListPage=Object.assign(this.usersList.slice(0,5))
    this.numberOfUserPages=this.usersList.length/6;
    this.numberOfUserPages=Math.floor(this.numberOfUserPages);
    (this.usersList.length%6)>0?this.numberOfUserPages++:true;
    this.numberPages=Array(this.numberOfUserPages).fill(0)
    this.activePage=Array(this.numberOfUserPages).fill(false);
    this.activePage[0]=true
    for(let index=0;index<this.numberOfUserPages;index++){
      this.numberPages[index]=index+1
    }
  }

}
