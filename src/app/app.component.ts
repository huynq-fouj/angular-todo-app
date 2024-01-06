import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './shared/todo.service';
import { Todo } from './shared/todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodosComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  todoName = new FormControl();

  constructor(private todoService : TodoService) {}

  addTodo() {
    const todo = new Todo(this.todoName.value);
    this.todoName.setValue("");
    this.todoService.addTodo(todo);
  }
}
