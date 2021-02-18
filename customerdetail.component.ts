import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {
  c=new Customer();
  constructor() {
    
   }

  ngOnInit(): void {
  }
onSubmit(CustData:any){
  // console.log(contactForm.custId);
  // console.log(contactForm.custName);
  // console.log(contactForm.city);
  console.log(CustData.value.custId);
  console.log(CustData.value.custName);
  console.log(CustData.value.city);
 this.c.custId=CustData.value.custId;
  this.c.custName=CustData.value.custName;
  this.c.city=CustData.value.city;
  console.log(this.c.custId);
  console.log(this.c.custName);
  console.log(this.c.city);
}
}
export class Customer{
  custId:number;
  custName:string;
  city:string;
}