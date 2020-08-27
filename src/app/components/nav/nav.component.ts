import { Component, OnInit, Input, HostListener } from '@angular/core';
import {HomeComponent} from '../home/home.component';
import { trigger, transition, style, animate } from '@angular/animations';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
  
})
export class NavComponent {
  clicked = 0;

  select(i) {
    this.clicked = i;
  }
  
}