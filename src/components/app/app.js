import React, {Component} from 'react';

import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import AddItem from '../add-item/add-item';

class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        // Опять-таки, новый state зависит от старого, поэтому передаем сначала функцию
        this.setState(({todoData}) => {
            // Ищем index элемента, который хотим удалять
            const idx = todoData.findIndex((el) => el.id === id);

            // Небезопасное удаление элементов из массива
            //todoData.splice(idx, 1);

            // Безопасное удаление элементов из массива

            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx+1);

            const newArray = [...before, ...after];

            // Возвращаем новое состояние
            return {
                todoData: newArray
            }
        })
    }

    addItem = (text) => {
        // Генерируем id
        const newItem =  this.createTodoItem(text);
        // Добавляем данные из формы в state
        this.setState(({todoData})=>{
            const newArr = [
                ...todoData,
                newItem
            ]

            return {
                todoData: newArr
            }
        })
    }
    
    onToggleImportant = (id) => {
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el)=> el.id === id);
            const oldItem = todoData[idx];
    
            const newItem = {...oldItem, important: !oldItem.important}
    
            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx+1)
            ]
    
            return {
                todoData: newArray
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData})=>{
            // Обновляем объект
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            // Создаем новый Item, переписываем туда все свойства spread оператором и меняем только done
            const newItem = {...oldItem, done: !oldItem.important}
            
            // Конструируем новый массив со всеми значениями, и между старыми вставляем новый
            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx+1)
            ]

            return {
                todoData: newArray
            };
        })
    }

    render(){

        const doneCount = this.state.todoData.filter((el)=>el.done).length; // фильтруем массив по кол-ву элементов done=true
        const todoCount = this.state.todoData.length - doneCount;

       return (
        <div>
            <AppHeader toDo={todoCount} done={doneCount}/>
            <SearchPanel />
            <TodoList todo={this.state.todoData} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone} onToggleImportant={this.onToggleImportant}/>
            <AddItem addItem={this.addItem}/>
        </div>
        )
    }
}

export default App;