import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    return (
        <ul>
            <li>learn React</li>
            <li>Build App</li>
        </ul>
    )
}

const AppHeader = () => {
    return (
        <h1>My Todo</h1>
    )
}

const SearchPanel = () => {
    return (
        <input type="search" placeholder="search" />
    )
}

const el = (
    <div>
        <AppHeader />
        <SearchPanel />
        <TodoList />
    </div>
)



ReactDOM.render(el, document.getElementById('root'));

