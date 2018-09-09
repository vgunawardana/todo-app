import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  private inputText:string;

  constructor() { 
    
    this.inputText='';
  }

  ngOnInit() {

    
  }

  private addTodo() : void{

    console.log("todo input :",this.inputText);
    this.inputText='';
  }

}
