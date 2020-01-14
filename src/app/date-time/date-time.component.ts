import { Component, OnInit } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})

export class DateTimeComponent implements OnInit {
    
  dateMessage: string;  //member variable
     
    constructor() {
       
      setInterval(()=>{
        let currentDate = new Date(); //CREATING DATE OBJECT
       this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString(); /*TO IMPLEMENT DATE AND TIME */
      },1000);

      
      }
  ngOnInit() {
  }
}
