import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hello: string;
  flag: boolean;
  constructor() {
    //this.user = "user_placeholder_constructor";
  }
  ngOnInit()
  {
    this.check();
  }

  local(username, password){
  console.log(username, password);
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  this.check();
  }
  logout()
  {
    localStorage.clear();
    this.check();
  }
  check(){
    if(localStorage.getItem('username')== null)
    this.flag= false;
  else
  {
  this.flag= true;
  this.hello= 'Hello '+ localStorage.getItem('username');
  }
  }


}
