import React from 'react'
import s from './Todo.module.css'

const Todo = (props) => {
  return ( 
    <div className={s.block}>
      <input onClick={props.toggleTodo} type="checkbox" className={s.check}/>
      <span type="text" className={s.text}>{props.text}</span>
    </div>
  )
}

export default Todo