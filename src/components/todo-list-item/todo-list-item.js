import React, {Component} from 'react';
import './todo-list-item.css';

class TodoListItem extends Component {

 
    render(){
        const {label, onDeleted, onToggleDone, onToggleImportant, important, done} = this.props;

        let classNames = 'd-flex todo-list-item'

        if(done) {
            classNames += ' done';
        }

        if(important) {
            classNames += ' important';
        }

        return (
            <div className={classNames}>
                <span className="todo-list-item-label" onClick={onToggleDone}>{ label }</span>
                <div className="todo-list-item__buttons">
                <button className="btn btn-outline-danger"
                    onClick={onDeleted}
                ><i className="fa fa-trash-o"></i></button>
                <button className="btn btn-outline-success" onClick = {onToggleImportant}><i className="fa fa-exclamation"></i></button>
                </div>
            </div>
            
        )
    }
}

export default TodoListItem;