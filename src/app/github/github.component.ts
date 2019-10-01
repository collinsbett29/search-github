import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-service/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user:any;
  repos: any;
  username:string;

  constructor(private _githubService:GithubService) {
    console.log('Collins KIpkorir Bett...')
  }

    search(username){
      this._githubService.updateUsername(this.username);
      this._githubService.getUser(username).subscribe(user => {
        // console.log(user);
        this.user = user;
      });
  
      this._githubService.getRepos(username).subscribe(repos => {
        console.log(repos);
        this.repos = repos;
       });
   }

  ngOnInit() {
    this._githubService.getUser('collinsbett29').subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this._githubService.getRepos('collinsbett29').subscribe(repos => {
        console.log(repos);
        this.repos = repos;
       });
  }

}
