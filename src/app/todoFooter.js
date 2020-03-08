import Filter from './filter'

function TodoFooter ({ count, plural, clearToggle, filter, filterTodo, clearCompleted }) {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{count}</strong> item{plural} left
      </span>
      <Filter filter={filter} filterTodo={filterTodo} />
      {clearToggle
        ? (<button id='clear-completed' onClick={clearCompleted} className='clear-completed'>
        Clear completed
        </button>) : ''}
    </footer>
  )
}

export default TodoFooter
