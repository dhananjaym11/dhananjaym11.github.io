import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})

export class TodoHeaderComponent {
  newTodo: Todo = new Todo(); 

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  addTodoHeader() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}
