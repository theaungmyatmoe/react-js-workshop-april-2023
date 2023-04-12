import React, {useState} from 'react';

const App = () => {
    const [todoValue, setTodoValue] = useState('')
    const [todos, setTodos] = useState([
        {
            id: Math.random(),
            taskName: 'Task 1',
            isFinished: false,
        },
        {
            id: Math.random(),
            taskName: 'Task 2',
            isFinished: true,
        },
    ])

    const onAddTask = () => {
        setTodos([
            ...todos,
            {
                id: Math.random(),
                taskName: todoValue,
                isFinished: false,
            }
        ])
        setTodoValue('')
    }

    const onDoneById = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isFinished: !todo.isFinished
                    }
                }

                return todo;
            })
        })
    }
    return (
        <div>
            <input
                type="text"
                onChange={e => setTodoValue(e.target.value)}
            />
            <button onClick={onAddTask}>Add task</button>
            <ul>
                {todos.map(todo => {
                    return <li key={todo.id}>
                        {todo.taskName} - {todo.isFinished ? 'Done' : 'Not finished yet'} -
                        <button onClick={() => onDoneById(todo.id)}>
                            {todo.isFinished ? 'Done' : 'Undo'}
                        </button>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default App;
