// Fake APIs
import { getAllBoards, addBoard, getBoardById } from './../../../api/boards';

import { Injectable } from '@angular/core';
import { Board } from './board.model'

@Injectable()
export class BoardService {
    boards: Array<Board>;
    constructor () {
        this.boards = getAllBoards();
    }

    getAll () {
        return this.boards;
    }

    create (board) {
        board.id = this.boards.length + 1;
        return addBoard(board);
    }

    getBoardById (id): any {
        return getBoardById(id);
    }
}

