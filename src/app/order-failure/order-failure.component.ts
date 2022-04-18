import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-failure',
  templateUrl: './order-failure.component.html',
  styleUrls: ['./order-failure.component.css']
})
export class OrderFailureComponent implements OnInit {

  constructor() { }
  public title = "There was an issue in order. Please try again later"
  ngOnInit(): void {
    
  }

}
