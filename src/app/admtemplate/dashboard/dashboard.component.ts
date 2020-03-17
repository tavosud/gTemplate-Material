import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  breakpoint: number;

  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 657) ? 1 : 4;
  }

  onResize(event) {

    if(event.target.innerWidth <= 900){
      this.breakpoint = 2;
    }

    if(event.target.innerWidth <= 657){
      this.breakpoint = 1;
    }

    if(event.target.innerWidth > 900){
      this.breakpoint = 4;
    }

    //this.breakpoint = (event.target.innerWidth <= 900) ? 1 : 4;
  }

}
