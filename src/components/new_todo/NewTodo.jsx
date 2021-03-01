import React from 'react'
import s from './NewTodo.module.css'

const NewTodo = (props) => {
    const text = React.createRef();

    const typeTodo = () => {
        props.typeTodo(text.current.value)
    }

    const addTodo = () => {
        props.addTodo();   
    }

    return (
        <div className={s.block}>
            <input ref={text} onChange={typeTodo} type='text' className={s.text} value={props.state.newTodoText}/>
            <button className={s.button} onClick={addTodo}>+</button>
        </div>
        
    )
}

export default NewTodo