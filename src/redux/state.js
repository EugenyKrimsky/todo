import renderDOM from "../render";

const state = {
    newTodoText: '',
    todos: [
        { id: 1, text: 'buy bread', isDone: false},
        { id: 2, text: 'buy milk', isDone: false},
        { id: 3, text: 'buy apple', isDone: false}
    ]
}

export const addTodo = () => {
    if (state.newTodoText) {
        state.todos.push({ id: state.todos.length, text: state.newTodoText, isDone: false });
        state.newTodoText = ''
        renderDOM(state);
    }
}

export const typeTodo = (text) => {
    state.newTodoText = text;
    renderDOM(state);

}

export const toggleTodo = (id) => {
    // state.todos[id].isDone = true;
    // renderDOM(state);

    alert(id)
}

export default state;