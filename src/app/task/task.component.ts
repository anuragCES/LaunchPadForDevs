import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TaskService } from './common/task.service';
import { Task } from './common/task.model';

@Component({
  selector: 'task',
  templateUrl: 'task.component.html',
})
export class TaskComponent implements OnInit {

  @Input() data: Task;
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter();

  constructor (private taskService: TaskService) {
  }

  ngOnInit () {
  }

  deleteTask ({id}) {
    this.taskService.deleteTask(id);
    this.taskDeleted.emit(id);
  }
}