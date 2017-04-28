import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input()
  todos: Todo[];
  @Output()
  removeApp: EventEmitter<Todo> = new EventEmitter();
  @Output()
  toggleCompleteApp: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  onToggleCompleteList(todo: Todo) {
    this.toggleCompleteApp.emit(todo);
  }
  onRemoveTodoList(todo: Todo) {
    this.removeApp.emit(todo);
  }

}
