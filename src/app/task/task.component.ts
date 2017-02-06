import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from './common/task.service';
import { Task } from './common/task.model';

@Component({
  selector: 'task',
  templateUrl: 'task.component.html',
})
export class TaskComponent implements OnInit {

  @Input() data: Task;

  constructor (private taskService: TaskService) {
  }

  ngOnInit () {
    console.log(this.data);
  }
}