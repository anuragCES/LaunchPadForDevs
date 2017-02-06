export const tasks = [
    {
        title: 'Test1',
        board: 1,
        taskList: 'BACKLOG'
    },
    {
        title: 'Test2',
        board: 1,
        taskList: 'todo'
    },
    {
        title: 'Test4',
        board: 1,
        taskList: 'BACKLOG'
    },
    {
        title: 'Test3',
        board: 1,
        taskList: 'todo'
    },
    {
        title: 'Test45',
        board: 1,
        taskList: 'BACKLOG'
    },
    {
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

export const addTask = (taskList: string, title: string, board: number) => {
    tasks.push({
        title,
        board,
        taskList
    })
}