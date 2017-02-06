import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BoardService } from './common/board.service'
import { Board } from './common/board.model'

import { TaskService } from './../task/common/task.service';
import { Task } from './../task/common/task.model';

@Component({
  templateUrl: './board.component.html',
  styleUrls: ['./common/board.component.css']
})

export class BoardComponent implements OnInit {

    private id: number;
    private board: Board;
    private error: string;
    private tasks: Array<Task>;
    private laneName: string;
    constructor (
      private route: ActivatedRoute,
      private router: Router,
      private boardService: BoardService,
      private taskService: TaskService
    ) {}

    ngOnInit () {
      this.route
        .params
        .map(params => params['id'])
        .do(id => this.id = parseInt(id))
        .subscribe(id => this.getBoardDetails())
    }

    isTaskValid (task, taskList) {
      if (task.taskList.toUpperCase().trim() === taskList.toUpperCase().trim()) {
        return true;
      }
      return false;
    }

    getTasksByListName (taskList: string) {
      let tasks = [];
      console.log('taskList');
      console.log(taskList);
      
      this.taskService.getTasksByBoard(this.id).map((task) => {
        if (this.isTaskValid(task, taskList)) {
          tasks.push(task);
        }
      })
      return tasks;
    }

    addLane (laneName) {
      this.boardService.createLane(this.id, laneName);
      this.getBoardDetails();
      this.laneName = '';
    }

    getBoardDetails () {
      this.board = this.boardService.getBoardById(this.id);
      if (!this.board)  {
        this.error = "No board exist, please create a new one!"
      }
    }

    taskCreated () {
      console.log('taskCreated');
      
      this.getBoardDetails();
      console.log(this.board);
      
    }

}