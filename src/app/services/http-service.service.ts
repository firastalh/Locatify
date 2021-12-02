import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  url="https://inshortsapi.vercel.app/news?category=science";
  url1=`https://gorest.co.in/public/v1/users`
  url2="https://gorest.co.in/public/v1/todos";
  accessTokenUrl: string;
  accessToken: any;
  constructor(private _httpClient:HttpClient,private _Injector:Injector) { 
    this.accessToken=this._Injector.get('accessToken');
    this.accessTokenUrl=`?access-token=${this.accessToken}`
  }
  getBooks(){
    return this._httpClient.get(this.url+this.accessTokenUrl)
  }
  getUsers(){
    return this._httpClient.get(this.url1+this.accessTokenUrl)
  }
  getTodo(){
    return this._httpClient.get(this.url)
  }
  addUser(user){
    return this._httpClient.post(this.url1+this.accessTokenUrl,user)
  }
}
 