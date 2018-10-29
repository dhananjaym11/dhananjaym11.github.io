import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor( private todoDataService: TodoDataService ) { }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
  get todosFiltered() {
    return this.todoDataService.getAllFilteredTodos();
  }
  get completed() {
    return this.todoDataService.getAllCompleted();
  }
  filterChangeApp(filterValue: string){
    return this.todoDataService.filterChange(filterValue);
  }
  onAddTodoApp(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }
  onToggleCompleteApp(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }
  onRemoveTodoApp(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

}
