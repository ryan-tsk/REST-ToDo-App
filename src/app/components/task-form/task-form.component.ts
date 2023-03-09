import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task/task.type';
import { taskAPI } from 'src/app/API/api.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  @Input() currentID: number = 0
  @Output() newTaskEvent = new EventEmitter<Task>()

  newTask: Task = {
    id: this.currentID,
    label: "",
    description: "",
    done: false
  }

  constructor(private taskService: taskAPI) { }

  ngOnInit() {
  }

  addNewTask(){
    this.taskService.addTask(this.newTask).subscribe()
    this.newTaskEvent.emit(this.newTask)
  }

}
