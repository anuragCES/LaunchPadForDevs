import { Injectable } from '@angular/core';
// Fake APIs
import { getAllTasks, getTasksByBoardId, addTask } from './../../../api/tasks';

@Injectable()
export class TaskService {
    getAllTasks () {
        return getAllTasks();
    }

    getTasksByBoard (id: number) {
        return getTasksByBoardId(id);
    }

    createTask (taskName: string, title: string, board: number) {
        return addTask(taskName, title, board);
    }
}