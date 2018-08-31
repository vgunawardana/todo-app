import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  private inputText:string;

  constructor() { }

  ngOnInit() {

    this.inputText='';
  }

  private addTodo() : void{

    console.log("todo input :",this.inputText);
    this.inputText='';
  }

}
