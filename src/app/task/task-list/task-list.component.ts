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
  tasks: Array<Task>;
  @Input() board: number;
  @Output() taskCreated: EventEmitter<string> = new EventEmitter();
  newTaskInProgress: boolean;
  taskName: string;

  constructor (private taskService: TaskService) {
    this.newTaskInProgress = false;
  }

  ngOnInit () {
      this.tasks = this.getTasksByListName(this.title);
  }

  isTaskValid (task, taskList) {
    if (task.taskList.toUpperCase().trim() === taskList.toUpperCase().trim()) {
      return true;
    }
    return false;
  }

  getTasksByListName (taskList: string) {
    let tasks = [];
    
    this.taskService.getTasksByBoard(this.board).map((task) => {
      
      if (this.isTaskValid(task, taskList)) {
        tasks.push(task);
      }
    })
    return tasks;
  }

  addTask () {
    this.newTaskInProgress = true;
  }


  createTask (taskName) {
    this.taskService.createTask(this.title, taskName, this.board);
    this.tasks = this.getTasksByListName(this.title);
    this.newTaskInProgress = false;
    this.taskName = '';
  }

  taskDeleted (id) {
    this.tasks = this.getTasksByListName(this.title);
    this.taskName = '';
  }
}