import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;

  constructor() {
      this.user = {
        name: 'Vineet Kumar Arya',
        title: 'Web Developer',
        address: '123, Main Street, City, State, 100010',
        phone: [
          '123-456-789',
          '456-456-456',
          '987-765-345'
        ]
      };
  }
  ngOnInit() {
  }

}
