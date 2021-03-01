import Todo from "./todo/Todo"
import s from './TodoList.module.css'

const TodoList = (props) => {
    const todos = props.state.todos.map(el => <Todo text={el.text}/>)

    return (
        <div className={s.block}>
            {todos}
        </div>
    )
}

export default TodoList