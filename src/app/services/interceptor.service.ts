import { HttpInterceptor,HttpHandler ,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  token='34caf4219b17e443c5c735df110c980c7531b9d32af7d6fb68acfaad613345ab'
  constructor() { }
  intercept(req:HttpRequest<any>,next:HttpHandler){
    let tokenize=req.clone({
      setHeaders:{
        Authorization:"Bearer "+this.token
      }
    })
return next.handle(tokenize)
  }
}
