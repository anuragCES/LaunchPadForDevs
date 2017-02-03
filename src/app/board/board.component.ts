import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BoardService } from './common/board.service'
import { Board } from './common/board.model'

@Component({
  templateUrl: './board.component.html',
})

export class BoardComponent implements OnInit {

    private id: number;
    private board: Board;
    private error: string;
    constructor (
      private route: ActivatedRoute,
      private router: Router,
      private boardService: BoardService
    ) {}

    ngOnInit () {
      console.log(this.route.params);
      this.route
        .params
        .map(params => params['id'])
        .do(id => this.id = parseInt(id))
        .subscribe(id => this.getBoardDetails())
    }

    getBoardDetails () {
      this.board = this.boardService.getBoardById((this.id))
      
      if (!this.board)  {
        this.error = "No board exist, please create a new one!"
      }
    }

}