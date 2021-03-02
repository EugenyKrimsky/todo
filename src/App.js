import React from 'react'
import NewTodo from './components/new_todo/NewTodo'
import TodoList from './components/todo_list/TodoList'
import s from './index.module.css'
import { addTodo, toggleTodo, typeTodo } from './redux/state';

function App(props) {
  return (
    <div className={s.app}>
      <h1>Todo</h1>
        <div className="todo_block">
          <NewTodo state={props.state} typeTodo={typeTodo} addTodo={addTodo}/>
          <TodoList state={props.state}  toogeTodo={toggleTodo}/>
        </div>
    </div>
  );
}

export default App;
