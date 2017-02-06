import { Injectable } from '@angular/core';
import { Task } from './task.model'
// Fake APIs
import { getAllTasks, getTasksByBoardId, addTask, deleteTask } from './../../../api/tasks';

@Injectable()
export class TaskService {
    tasks: Array<Task>;
    constructor () {
        this.tasks = getAllTasks();
    }

    getAllTasks () {
        return this.tasks;
    }

    getTasksByBoard (id: number) {
        return getTasksByBoardId(id);
    }

    createTask (taskList: string, title: string, board: number) {
        const id = this.tasks.length + 1;
        return addTask({id, taskList, title, board});
    }

    deleteTask (id) {
        return deleteTask(id);
    }
}