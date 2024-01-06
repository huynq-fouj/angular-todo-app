import { Component, Input, Output, EventEmitter, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

import { Todo } from './../shared/todo.model';

@Component({
  selector: 'app-todo-box',
  standalone: true,
  imports: [],
  templateUrl: './todo-box.component.html',
  styleUrl: './todo-box.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TodoBoxComponent {
  @Input() todo!: Todo;
  @Output() onRemove = new EventEmitter<boolean>();

  constructor() {
    defineElement(lottie.loadAnimation);
  }

  removeClick(e : Event) {
    e.stopPropagation();
    this.onRemove.emit();
  }
}
