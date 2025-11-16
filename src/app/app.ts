import { Component, signal } from '@angular/core';
import { InputButtonUnit } from './input-button-unit/input-button-unit';

@Component({
  selector: 'app-root',
  imports: [InputButtonUnit],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'todo-list';
  todoList = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];
}
