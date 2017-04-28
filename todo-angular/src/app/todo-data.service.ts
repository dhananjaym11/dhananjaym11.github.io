import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

  lastId: number = 0;
  todos: Todo[] = [];
  tilteredTodos: Todo[] = [];
  todoFilter: string = '';
  done: boolean = false;

  constructor() { }

   getAllTodos(): Todo[] {
    return this.todos;
  }
   getAllFilteredTodos(): Todo[] {
     if(this.todoFilter){
        if(this.todoFilter === 'non-completed') { this.done = false }
        else { this.done = true }
        this.tilteredTodos = this.todos.filter(todo => todo.complete ===  this.done);
        return this.tilteredTodos;
     }
     else{
        return this.todos;
     }    
  }
  getAllCompleted(): number {
    let completedTodo = this.todos.filter(todo => todo.complete === true);
    return completedTodo.length;
  }
  filterChange(filterValue: string){
    console.log('abc' + filterValue);
    this.todoFilter = filterValue;
  }
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }
  updateTodoById(todo: Todo, values: Object = {}): Todo {
    Object.assign(todo, values);
    return todo;
  }
  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

}