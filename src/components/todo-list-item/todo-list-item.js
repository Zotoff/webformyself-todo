import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, important = false}) => {
    const liStyle = {
        color: important ? 'tomato' : 'black'
    }
    return (
        <div class="d-flex todo-list-item">
            <span className="todo-list-item" style={liStyle}>{ label }</span>
            <button className="btn btn-outline-danger"><i className="fa fa-trash-o"></i></button>
            <button className="btn btn-outline-success"><i className="fa fa-exclamation"></i></button>
        </div>
        
    )
}

export default TodoListItem;