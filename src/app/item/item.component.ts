import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    {{todoItem.title}}
  `,
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  constructor() { }
  @Input() todoItem: any;
  ngOnInit() {
  }

}
