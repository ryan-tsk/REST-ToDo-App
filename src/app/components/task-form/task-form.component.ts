import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task/task.type';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  @Input() currentID = 0
  @Output() newTaskEvent = new EventEmitter<Task>()

  newTask: Task = {
    id: this.currentID,
    label: "",
    description: "",
    done: false
  }

  constructor() { }

  ngOnInit() {
  }

  addNewTask(){
    this.newTaskEvent.emit(this.newTask)
  }

}
