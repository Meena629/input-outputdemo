import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  catId:number;
  catName:string;
  description:string;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(contactForm:any)
  {
    this.catId=contactForm.value.catId;
    this.catName=contactForm.value.catName;
    this.description=contactForm.value.description;
    console.log(contactForm.value);
  }

}
