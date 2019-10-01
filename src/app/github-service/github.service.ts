import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username = 'collinsbett29';
  private client_id = 'b491b07269943f16fd21';
  private client_secret = '7a258b7f4a4a36be20f056e7338142201f14e64f';

  constructor(private _http:HttpClient) {
    console.log('Github Service init......')
   }

   getUser(username){
     console.log(username);
      return this._http.get('https://api.github.com/users/' + username)
      .pipe(map(res => res));
   }

   getRepos(username){
    console.log(username);
     return this._http.get('https://api.github.com/users/' + username + '/repos')
     .pipe(map(res => res));
  }

  updateUsername(username:string){
    this.username = username;


  }

   
}

