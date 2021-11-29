import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  accessToken='?access-token=34caf4219b17e443c5c735df110c980c7531b9d32af7d6fb68acfaad613345ab'
  url="https://inshortsapi.vercel.app/news?category=science";
  url1=`https://gorest.co.in/public/v1/users`
  url2="https://gorest.co.in/public/v1/todos";
  constructor(private _httpClient:HttpClient) { }
  getBooks(){
    return this._httpClient.get(this.url+this.accessToken)
  }
  getUsers(){
    return this._httpClient.get(this.url1+this.accessToken)
  }
  getTodo(){
    return this._httpClient.get(this.url2)
  }
  addUser(user){
    return this._httpClient.post(this.url1+this.accessToken,user)
  }
}
 