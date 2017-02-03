import { Component, OnInit } from '@angular/core';
import { BoardService } from './../common/board.service'

// Model
class Board {
    id: number;
    name: string;
    TaskLists: Array<string>;
}

@Component({
  selector: 'board-list',
  templateUrl: 'board-list.component.html',
})
export class BoardListComponent implements OnInit {
    private board: Board;
    private existingBoards: any; 
    private boardService: BoardService;

    constructor (boardService: BoardService) {
        this.boardService = boardService;
    }

    ngOnInit () {
        this.existingBoards = this.boardService.getAll();
        console.log(this.existingBoards);
    }
}