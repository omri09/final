import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() {
    // customize default values of carousels used by this component tree

  }
  hello: string;
  connected: boolean;
    //this.user = "user_placeholder_constructor";
  // }
   ngOnInit()
   {
     this.checkCookie();
   }

  // local(username, password){
  //   let expires=new Date();
  //   expires.setTime(expires.getTime()+(30*24*60*60*1000));
  //   console.log(expires.toUTCString());
  //   document.cookie = `username=${username}; expires= ${expires}`;


  // //console.log(username, password);
  // //localStorage.setItem('username', username);
  // //localStorage.setItem('password', password);
  // this.check();
  // }
  // logout()
  // {
  //   localStorage.clear();
  //   this.check();
  // }
  // check(){
  //   if(localStorage.getItem('username')== null)
  //   this.connected= false;
  // else
  // {
  // this.connected= true;
  // this.hello= 'Hello '+ localStorage.getItem('username');

  // }
  // }
   setCookie(username, password) {
    var exdays= 30;
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie =  "username=" + username + ";" + expires + ";path=/";
    document.cookie =  "password=" + password + ";" + expires + ";path=/";
    this.checkCookie();

  }
  
   getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
   checkCookie() {
    var user = this.getCookie("username");
    if (user != "") {
      this.connected= true;
      this.hello= user;
    } else {
      this.connected= false;

      }
    }

    logout()
  {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    this.checkCookie();
  }
  }
  


