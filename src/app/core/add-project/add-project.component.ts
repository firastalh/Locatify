import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { updateFunctionDeclaration } from 'typescript';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
 userForm
 nextStep=false;
 usersList=[]
usersListPage=[]
  constructor(private _httpServiceService:HttpServiceService) { }

  ngOnInit(): void {
    this.userForm=new FormGroup({
      name:new FormControl(),
      status:new FormControl(),
      gender:new FormControl()
    })
    this._httpServiceService.getUsers().subscribe(listUsers=>{
      this.usersList=listUsers['data'];
      this.usersListPage=this.usersList.slice(0,6);
      console.log('++',this.usersList)
    
    })
  }
  createUser(){
    this.nextStep=true;
  }
  addUser(user){
    user.value.email=user.value.name+'@gmail.com'

    this._httpServiceService.addUser(user.value).subscribe(res=>{
      console.log(res)
    })
    
    console.log(user.value)
    
  }
  seeAll(){
    this.usersListPage=Object.assign(this.usersList)
  }
}
