import { Component, OnInit } from '@angular/core';
import { BoardService } from './../common/board.service'
import { Board } from './../common/board.model'

@Component({
  selector: 'board-form',
  templateUrl: 'board-form.component.html',
})
export class BoardFormComponent implements OnInit {
    private board: Board;
    private existingBoards: any; 
    private boardService: BoardService;

    constructor (boardService: BoardService) {
        this.boardService = boardService;
    }

    ngOnInit () {
        this.clearBoard();
        this.existingBoards = this.boardService.getAll();
    }

    clearBoard () {
        this.board = <Board>{ name: '' };
    }

    createBoard (newBoard) {
        this.boardService.create(newBoard);
        this.existingBoards = this.boardService.getAll();
        this.clearBoard();
    }
}