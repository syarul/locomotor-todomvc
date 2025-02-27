import TodoItem from './todoItem'

function Todo ({ todos, dispatch }) {
  return (
    <ul id='todoList' className='todo-list'>
      {Array.from(todos, todo => <TodoItem {...todo} dispatch={dispatch} />)}
    </ul>
  )
}

export default Todo
