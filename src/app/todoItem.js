import { useState } from 'locomotor/index'
import { ENTER_KEY } from './utils'

function TodoItem (item) {
  const { todo, completed, editing, dispatch } = item

  const [value, setValue] = useState(todo)

  const onChange = e => {
    setValue(e.target.value)
    if(e.keyCode === ENTER_KEY) {
      dispatch({
        action: 'edit',
        todo: {
          ...item,
          todo: value.trim(),
          editing: false
        }
      })
    }
  }

  const editTodo = () => { 
    dispatch({
      action: 'edit',
      todo: {
        ...item,
        editing: true
      }
    })
   }

  const activeClass = (completed, editing) => {
    let cl = []
    if (completed) cl = cl.concat('completed')
    if (editing) cl = cl.concat('editing')
    return cl.join(' ')
  }

  const toggle = () => {
    dispatch({
      action: 'edit',
      todo: {
        ...item,
        completed: !completed
      }
    })
  }

  const destroy = () => {
    dispatch({ action: 'remove', todo: item })
  }

  return (
    <li class={activeClass(completed, editing)}>
      <div class='view'>
        <input class='toggle' type='checkbox' checked={completed} onClick={toggle} />
        <label onDblclick={editTodo}>{todo}</label>
        <button class='destroy' onClick={destroy} />
      </div>
      <input class='edit' value={value} onChange={onChange} autofocus={true}/>
    </li>
  )
}

export default TodoItem
