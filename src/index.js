import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/todo-list/todo-list';
import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';

const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false},
        {label: 'Make Awesome App', important: true},
        {label: 'Have a lunch', important: false}
    ];

    return (
    <div>
        <AppHeader toDo={1} done={3}/>
        <SearchPanel />
        <TodoList todo={todoData}/>
    </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));

