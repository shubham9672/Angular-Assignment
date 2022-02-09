import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {
    
   }
  private postApi = "https://jsonplaceholder.typicode.com/posts"
    getPosts(){
    return this.http.get(this.postApi);
  }
}
