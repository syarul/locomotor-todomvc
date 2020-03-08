import { useState } from 'locomotor'
import { ENTER_KEY } from './utils'

function Header ({ dispatch }) {
  const [value, setValue] = useState('')

  const onChange = e => {
    const todo = e.target.value.trim()
    setValue(todo)
    if (e.keyCode === ENTER_KEY) {
      dispatch({ action: 'add', todo })
      setValue('')
    }
  }
  return (
    <header id='header'>
      <h1>todos</h1>
      <input
        id='new-todo'
        className='new-todo'
        onChange={onChange}
        value={value}
        placeholder='What needs to be done?'
        autofocus='' />
    </header>
  )
}

export default Header
