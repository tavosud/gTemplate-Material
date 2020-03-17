import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-head-layout',
  templateUrl: './head-layout.component.html',
  styleUrls: ['./head-layout.component.css']
})
export class HeadLayoutComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
