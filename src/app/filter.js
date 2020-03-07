import { useReducer, useLayoutEffect } from 'locomotor/index'
import { filterReducer, intialFilter } from './reducers/filterReducer'

let initial = true

function Filter ({ filterTodo }) {
  const [filter, dispatch] = useReducer(filterReducer, intialFilter)

  const updateUrl = e => {
    filterTodo(e.target.hash)
    dispatch(e.target.hash)
  }

  useLayoutEffect(() => {
    if (initial) {
      initial = false
      // window.onpopstate = () => updateUrl({ target: { hash: window.location.hash } })
      if (window.location.hash !== '#/all') {
        updateUrl({ target: { hash: window.location.hash } })
      } else {
        dispatch(window.location.hash)
      }
      if (!filter.find(({ href }) => href === window.location.hash)) {
        window.history.pushState({}, null, '#/all')
        updateUrl({ target: { hash: window.location.hash } })
      }
    }
  })

  return (
    <ul id='filters' class='filters'>
      {Array.from(filter, ({ name, href, selected }) => {
        return (<li id={name} onClick={updateUrl}>
          <a className={selected} href={href}>
            {name}
          </a>
        </li>)
      })}
    </ul>
  )
}

export default Filter
