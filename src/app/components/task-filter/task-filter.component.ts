import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task/task.type';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.scss']
})
export class TaskFilterComponent implements OnInit {

  @Input() taskList: Task[] 
  @Output() taskListEvent = new EventEmitter<Task[]>()

  constructor() { }

  ngOnInit() {
  }

}
