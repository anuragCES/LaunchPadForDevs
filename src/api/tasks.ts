export let tasks = [
    {
        id: 1,
        title: 'Test1',
        board: 1,
        taskList: 'BACKLOG'
    },
    {
        id: 2,
        title: 'Test2',
        board: 1,
        taskList: 'todo'
    },
    {
        id: 3,
        title: 'Test4',
        board: 1,
        taskList: 'BACKLOG'
    },
    {
        id: 4,
        title: 'Test3',
        board: 1,
        taskList: 'todo'
    },
    {
        id: 5,
        title: 'Test45',
        board: 1,
        taskList: 'BACKLOG'
    },
    {
        id: 6,
        title: 'Test36',
        board: 1,
        taskList: 'todo'
    }
]

export const getAllTasks = () => {
    return tasks;
}

export const getTasksByBoardId = (id: number) => {
    let result = [];
    tasks.map((task) => {
        if (task.board === id) {
            result.push(task);
        }
    })
    return result;
}

export const addTask = (task): any => {

    if (tasks.indexOf(task) === -1) {
        return tasks.push(task);
    }

    return [{
        errorMessage: 'task with the same name exists'
    }]
}

export const deleteTask = (id): any => {
    let results = [];        
    tasks.map((task) => {
        if (task.id !== id) {
            results.push(task);
        }
    })
    tasks = results;
    return results;
}