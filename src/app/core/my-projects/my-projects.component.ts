import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit{
  activatePagination=[true,false,false,false]
  constructor(private _httpServiceService:HttpServiceService) { }
 booksList=[]
 filteredList=[]
 filterForm=new FormGroup({
  filter:new FormControl()
})
  ngOnInit(): void {
  


    this._httpServiceService.getBooks().subscribe(res=>{
      console.log(res['data'])
      this.booksList=res['data']
      this.filteredList=Object.assign([... this.booksList])
    })
    this.filterForm.get('filter').valueChanges.subscribe(filterKey=>{
      console.log(filterKey)
      
      if(filterKey!=''){
        this.filteredList=this.booksList.filter(el=>{return el.author==filterKey})
        
        console.log(this.booksList)
      }
      if(filterKey=='' && this.filteredList.length==0){

          this.filteredList=Object.assign([... this.booksList])
        
      }
      
    })
  }

  setActivated(index:number){
this.activatePagination.fill(false)
this.activatePagination[index]=true
  }
  filterItems(){
    console.log(this.filterForm.value)
  }
}
