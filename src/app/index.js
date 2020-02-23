import Locomotor, { useState, useReducer } from 'locomotor'

const ENTER_KEY = 13

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return 0;
    default: throw new Error('Unexpected action');
  }
};

function Header() {

  const [newtodo, setNewtodo] = useState('')

  const [todos, setTodos] = useState([])

  const [count, dispatch] = useReducer(reducer, initialState)

  const onChange = e => {
    setNewtodo(e.target.value.trim())
  }

  console.log(count)

  const onKeydown = e => {
    dispatch('increment')
    if (e.keyCode !== ENTER_KEY) return
    if(newtodo) {

    }
  }

  return (
    <header id="header">
      <h1>todos</h1>
      <input id='new-todo' class='new-todo' onChange={onChange} onKeydown={onKeydown} placeholder='What needs to be done?' autofocus=''/>
    </header>
  )
}

function App() {

  return (
    <Locomotor>
      <Header />
      <div> foo </div>
    </Locomotor>
  )
}

export default Header