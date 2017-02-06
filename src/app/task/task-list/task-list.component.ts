import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from './../common/task.service';
import { Task } from './../common/task.model';

@Component({
  selector: 'task-list',
  templateUrl: 'task-list.component.html',
  styleUrls: ['./../common/task.css']
})
export class TaskListComponent implements OnInit {

  @Input() title;
  @Input() tasks: Array<Task>;
  @Input() board: number;
  @Output() taskCreated: EventEmitter<string> = new EventEmitter();

  constructor (private taskService: TaskService) {
  }

  ngOnInit () {
    console.log(this.tasks);
    
  }

  createTask (taskName) {
    console.log('createTask');
    
    this.taskService.createTask(taskName, this.title, this.board);
    this.taskCreated.emit(taskName);
  }
}