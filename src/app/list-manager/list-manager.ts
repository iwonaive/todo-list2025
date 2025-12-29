import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../todo-item/todo-item';


@Component({
  selector: 'app-list-manager',
  imports: [],
  templateUrl: './list-manager.html',
  styleUrl: './list-manager.scss',
})
export class ListManager {

  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  addItem(title: string) {    
    this.todoList.push({ title });
  }
}
