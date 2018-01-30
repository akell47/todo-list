import { Component, OnInit } from '@angular/core';
import { TodoListService} from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: `
    <p>
      list-manager works!
    </p>
  `,
  styleUrls: ['./list-manager.component.css']
})
  export class ListManagerComponent implements OnInit {

  constructor(private TodoListService:TodoListService) { }

  addItem(item): void {
    this.TodoListService.addItem(item);
  }

  ngOnInit() {
    this.todoList = this.TodoListService.getTodoList();
  }

}
