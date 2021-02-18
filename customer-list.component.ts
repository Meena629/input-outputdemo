import { Component, OnInit, Input } from '@angular/core';
import {Customer} from '../customerdetail/customerdetail.component';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @Input() custdata:Customer;
  mycustarray: Customer[]=[
    {custId:1, custName:'Gayathri', city:'Vizag'},
  {custId:2, custName:'Likhita', city:'Vizag'}
];
  constructor() { }

  ngOnInit(): void {
  }
show() {
  console.log(this.custdata);
}
}