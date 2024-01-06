import { Component, OnInit } from '@angular/core';
import { TodoBoxComponent } from '../todo-box/todo-box.component';

import { Todo } from './../shared/todo.model';
import { TodoService } from './../shared/todo.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoBoxComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todos : Todo[] = [];

  constructor(private todoService : TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getAllTodos();
  }

  toggleComplete(index : number) {
    this.todos[index].completed = !this.todos[index].completed;
    this.todoService.editTodo(index, this.todos[index]);
  }

  removeTodo(index : number) {
    this.todoService.deleteTodo(index);
  }

}
