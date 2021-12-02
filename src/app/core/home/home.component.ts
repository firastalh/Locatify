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
userActivePage=[]
newsList=[]
newsListPage=[]
newsactivePage=[]
numberOfUserPages:number;
numberOfNewsPages:number
newsNumberPages=[]
numberPages=[];
  constructor(private _httpServiceService:HttpServiceService) { }

  ngOnInit(): void {
    this._httpServiceService.getUsers().subscribe(res=>{
      this.usersList=res['data']
      this.initializeUserPages()
    })
    this._httpServiceService.getTodo().subscribe(res=>{
      this.newsList=res['data']
      this.newsList.filter(el=>el.status=='completed')
      this.initializeNewsPages()
    })
  }
  changeUserPage(index){
    let firstItem=(index-1)*6;
    this.usersListPage=this.usersList.slice(firstItem,index*6)
    this.userActivePage.fill(false)
    this.userActivePage[index-1]=true
    console.log( this.userActivePage)
    console.log('index',index)
  }
  initializeUserPages(){
    this.usersListPage=Object.assign(this.usersList.slice(0,6));
    
    this.getUserPageNumber();
    this.initializeUserPageArray();
    this.initializeActivePageArray();


  }
  initializeNewsPages(){
this.newsListPage=Object.assign(this.newsList.slice(0,3))
this.getNewsPageNumber();
this.initializeNewsPageArray();
this.initializeActiveNewsPageArray()

  }
  getNewsPageNumber(){
this.numberOfNewsPages=this.newsList.length/3;
this.numberOfNewsPages=Math.floor(this.numberOfNewsPages)
this.newsList.length%3>0?this.numberOfNewsPages++:true;
console.log(this.numberOfNewsPages)
  }
  initializeActiveNewsPageArray(){
    this.newsactivePage=Array(this.numberOfNewsPages).fill(false);
      this.newsactivePage[0]=true
      console.log(this.newsactivePage)
  }
  initializeNewsPageArray(){
    this.newsNumberPages=Array(this.numberOfNewsPages).fill(0)
      for(let index=0;index<this.numberOfNewsPages;index++){
        this.newsNumberPages[index]=index+1
      }
      console.log(this.newsNumberPages)
  }

  getUserPageNumber(){
    this.numberOfUserPages=this.usersList.length/6;
    this.numberOfUserPages=Math.floor(this.numberOfUserPages);
    (this.usersList.length%6)>0?this.numberOfUserPages++:true;
  }
initializeActivePageArray(){
  this.userActivePage=Array(this.numberOfUserPages).fill(false);
    this.userActivePage[0]=true
}
initializeUserPageArray(){
  this.numberPages=Array(this.numberOfUserPages).fill(0)
    for(let index=0;index<this.numberOfUserPages;index++){
      this.numberPages[index]=index+1
    }
}

changeNewsPage(index){
  let firstItem=(index-1)*3;
  this.newsListPage=this.newsList.slice(firstItem,index*3)
  this.newsactivePage.fill(false)
  this.newsactivePage[index-1]=true
  console.log( this.newsactivePage)
  console.log('index',index)
}
}
