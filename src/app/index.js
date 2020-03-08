import { L, useReducer } from 'locomotor'
import Header from './header'
import Todo from './todo'
import TodoFooter from './todoFooter'
import Footer from './footer'
import { todoReducer, initialTodo } from './reducers/todoReducer'
import { filterReducer, initialFilter } from './reducers/filterReducer'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETE } from './utils'

function App () {
  const [{
    count,
    todos,
    clearToggle,
    plural,
    isChecked
  }, dispatch] = useReducer(todoReducer, initialTodo)

  const [filter, dispatchFilter] = useReducer(filterReducer, initialFilter)

  const { name = SHOW_ALL } = filter.find(({ selected }) => selected) || {}

  const useTodos = todos.filter(t => {
    if (name === SHOW_ACTIVE) {
      return !t.completed
    } else if (name === SHOW_COMPLETE) {
      return t.completed
    } else {
      return t
    }
  })

  return (
    <L>
      <section className='todoapp'>
        <Header dispatch={dispatch} />
        <section className='main'>
          <input
            id='toggle-all'
            className='toggle-all'
            type='checkbox'
            checked={isChecked}
            onClick={() => dispatch({ action: 'completeAll' })} />
          <label for='toggle-all'>Mark all as complete</label>
          <Todo todos={useTodos} dispatch={dispatch} />
        </section>
        <TodoFooter
          count={count}
          plural={plural}
          clearToggle={clearToggle}
          clearCompleted={() => dispatch({ action: 'clearComplete' })}
          filter={filter}
          filterTodo={dispatchFilter} />
      </section>
      <Footer />
    </L>
  )
}

export default App
