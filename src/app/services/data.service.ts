import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private todos: Todo[];
  private nextId: number;

  constructor() { 
    this.todos = [
      new Todo(0,"make carrot juice"),
      new Todo(1,"clean kitchen"),
      new Todo(2,"complete angular tuto")

    ];

    this.nextId = 3;
  }

  public addTodo(text:string): void{

    let newTodo = new Todo(this.nextId,text);
    this.todos.push(newTodo);
    this.nextId++;
    console.log(this.todos);

  }

  public getTodos(): Todo[]{

    return this.todos;

  }

  public deleteTodos(id:number): void{

    this.todos = this.todos.filter((Todo) => Todo.id !== id);
  }


}
