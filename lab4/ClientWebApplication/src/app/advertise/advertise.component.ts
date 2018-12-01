import { Component, OnInit } from '@angular/core';

@Component({
  host: {'class':'col-xl-12'},
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.css']
})
export class AdvertiseComponent implements OnInit {
  
  advertiseText = 'Advertise!!!';

  constructor() { }

  ngOnInit() {
  }

}
