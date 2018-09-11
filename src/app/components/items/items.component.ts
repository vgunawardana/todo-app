import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../classes/todo';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input()
  private item:Todo;

  constructor(private dataservice:DataService) { 

  }

  ngOnInit() {
  }

  private removeTodo(): void{
    this.dataservice.deleteTodos(this.item.id);
  }

}
