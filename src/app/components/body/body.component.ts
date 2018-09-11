import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  private inputText:string;

  constructor(private dataservice:DataService) { 
    
    this.inputText='';
  }

  ngOnInit() {

    
  }

  private addTodo() : void{
    this.dataservice.addTodo(this.inputText);
    //console.log("todo input :",this.inputText);
    this.inputText='';
  }

}
