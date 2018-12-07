import { Component, OnInit } from '@angular/core';

@Component({
  host: {'class':'col-xl-12'},
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  events: string[] = [];
  opened: boolean = false;
  constructor() { }

  ngOnInit() {
  }
}
