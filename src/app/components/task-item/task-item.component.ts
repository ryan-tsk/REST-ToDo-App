import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task/task.type';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() taskItem: Task
  @Output() taskItemEvent = new EventEmitter<Task>()

  constructor() { }

  ngOnInit() {
  }

  refreshTask(){
    this.taskItemEvent.emit(this.taskItem)
  }

  

}
