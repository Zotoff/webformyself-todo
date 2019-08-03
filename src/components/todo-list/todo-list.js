import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({todo, onDeleted, onToggleDone, onToggleImportant}) => {

    const elements = todo.map((item) => {
        const {id, ...itemProps} = item;
        return(
            <li key={id} className="list-group-item">
                <TodoListItem 
                    {...itemProps} // передаем оставшиеся свойства кроме id
                    onDeleted={()=>{onDeleted(id)}}
                    onToggleImportant={()=>{onToggleImportant(id)}}
                    onToggleDone={()=>{onToggleDone(id)}}
                 // передаем id в свойство и пускаем его в дочерний
                />
            </li>
        )
    })

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
}

export default TodoList;