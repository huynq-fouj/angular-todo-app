import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];

  constructor() {
    this.loadTodos();
  }

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo : Todo) {
    this.todos.push(todo);
    this.saveTodos();
  }

  deleteTodo(index : number) {
    this.todos.splice(index, 1);
    this.saveTodos();
  }

  editTodo(index : number, todo : Todo) {
    this.todos[index] = todo;
    this.saveTodos();
  }

  loadTodos() {
    try {
      if(typeof window !== "undefined") {
        const item = window.localStorage.getItem("todos");
        if(!item) return;
        const onLocal = JSON.parse(item);
        if(!onLocal) return;
        this.todos.length = 0;
        this.todos.push(...onLocal);
      } else {
        console.log("'window' is not available.");
      }
    } catch (e) {
      console.log(e);
    }
  }

  saveTodos() {
    if(typeof window !== "undefined") {
      window.localStorage.setItem("todos", JSON.stringify(this.todos));
    } else {
      console.log("'window' is not available.");
    }
  }

}
