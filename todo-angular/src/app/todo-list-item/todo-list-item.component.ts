import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {

  @Input() todo: Todo;
  @Output()
  removeList: EventEmitter<Todo> = new EventEmitter();
  @Output()
  toggleCompleteList: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  onToggleCompleteItem(todo: Todo) {
    this.toggleCompleteList.emit(todo);
  }
  removeTodoItem(todo: Todo) {
    this.removeList.emit(todo);
  }
  
}