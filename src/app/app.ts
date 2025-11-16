import { Component, signal } from '@angular/core';
import { InputButtonUnit } from './input-button-unit/input-button-unit';

@Component({
  selector: 'app-root',
  imports: [InputButtonUnit],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('todo-list');
}
