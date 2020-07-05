import { Component, OnInit, Input, HostListener } from '@angular/core';
import {HomeComponent} from '../home/home.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }),
            animate('.5s ease-out', style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ opacity: 1 }),
            animate('.5s ease-in', style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class NavComponent implements OnInit {
  
  constructor() { }

  showMore = false;

  addItem(){
    this.showMore= !this.showMore;
  }


   innerWidth: any;

   @HostListener('window:resize', ['$event'])
   onResize(event) {
     if(window.innerWidth < 600)
     this.showMore=false;
     else
     this.showMore=true;
   }
  ngOnInit(): void {
    this.onResize(event);

}
}