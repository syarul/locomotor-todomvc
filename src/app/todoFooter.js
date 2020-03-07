import Filter from './filter'

function TodoFooter ({ count, plural, clearToggle, filterTodo }) {
  const clearCompleted = () => {}

  return (
    <footer class='footer'>
      <span class='todo-count'>
        <strong>{count}</strong> item{plural} left
      </span>
      <Filter filterTodo={filterTodo} />
      {clearToggle
        ? (<button id='clear-completed' onClick={clearCompleted} class='clear-completed'>
        Clear completed
        </button>) : ''}
    </footer>
  )
}

export default TodoFooter
