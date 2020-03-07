const uuid = () => Math.round(Math.random() * 1e17).toString(32)

const processOutput = state => {
  const { todos } = state
  const uncompleted = todos.filter(c => !c.completed)
  const completed = todos.filter(c => c.completed)
  return {
    todos,
    clearToggle: !!completed.length,
    plural: uncompleted.length === 1 ? '' : 's',
    count: uncompleted.length,
    isChecked: !uncompleted.length
  }
}

export const initialTodo = processOutput({
  todos: []
})

export const todoReducer = (state, { action, todo }) => {
  switch (action) {
    case 'add':
    {
      const newTodo = {
        id: uuid(),
        todo,
        completed: false,
        editing: false
      }
      const todos = [...state.todos, newTodo]
      return processOutput({
        ...state,
        todos
      })
    }
    case 'edit':
    {
      const idx = state.todos.findIndex(t => t.id === todo.id)
      const todos = Object.assign([], state.todos)
      todos.splice(idx, 1, todo)
      return processOutput({
        ...state,
        todos
      })
    }
    case 'remove':
    {
      const idx = state.todos.findIndex(t => t.id === todo.id)
      const todos = Object.assign([], state.todos)
      todos.splice(idx, 1)
      return processOutput({
        ...state,
        todos
      })
    }
    default:
      return processOutput(state)
  }
}
