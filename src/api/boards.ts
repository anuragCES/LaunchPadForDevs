const boards = [
    {
        id: 1,
        name: 'Scrum',
        taskLists: [
            'Backlog',
            'Todo',
            'In Progress',
            'Code Review',
            'QA',
            'Done',
        ]
    },
    {
        id: 2,
        name: 'Weekdays',
        taskLists: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thrusday',
            'Friday',
        ]
    }
]

export function getAllBoards () {
    return boards;
}

export function addBoard (board): any {
    if (boards.indexOf(board) === -1) {
        return boards.push(board);
    }

    return [{
        errorMessage: 'board with the same name exists'
    }]
}

export function getBoardById (id) {
    let resultBoard = null;

    boards.map(board => {
        if(board.id === id){
            resultBoard = board;
        }
    })
    return resultBoard;
}

export function setBoards (id, laneName) {
    boards.map((board) => {
        if (board.id === id) {
            board.taskLists.push(laneName);
        }
        boards.push(board);
    })

    return boards;
}