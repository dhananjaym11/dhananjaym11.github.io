import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent {

  @Input()
  todos: Todo[];
  @Input()
  completed: number;
  @Output()
  filterChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  filterChangeFun(filterValue: string) {
    this.filterChange.emit(filterValue);
  }
}
