import { L, useReducer, useState, useEffect } from 'locomotor/index'
import Header from './header'
import Todo from './todo'
import TodoFooter from './todoFooter'
import Footer from './footer'
import { todoReducer, initialTodo } from './reducers/todoReducer'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETE } from './utils'

function App () {
  const [{
    count,
    todos,
    clearToggle,
    plural
  }, dispatch] = useReducer(todoReducer, initialTodo)

  const [visibilityFilter, setVisibilityFilter] = useState(SHOW_ALL)

  // useEffect(() => {
  //   console.log(visibilityFilter)
  // })

  let useTodos = todos
  
  if (visibilityFilter === SHOW_ACTIVE) {
    useTodos = todos.filter(t => !t.completed)
  } else if (visibilityFilter === SHOW_COMPLETE) {
    useTodos = todos.filter(t => t.completed)
  }

  const filterTodo = hash => {
    console.log(hash)
    if(hash === undefined) return
    if (hash.match('active')) {
      setVisibilityFilter(SHOW_ACTIVE)
    } else if (hash.match('completed')) {
      setVisibilityFilter(SHOW_COMPLETE)
    }
    // cb()
  }

  return (
    <L>
      <section class='todoapp'>
        <Header dispatch={dispatch} />
        <Todo todos={useTodos} dispatch={dispatch} />
        <TodoFooter
          count={count}
          plural={plural}
          clearToggle={clearToggle}
          filterTodo={filterTodo} />
      </section>
      <Footer />
    </L>
  )
}

export default App
