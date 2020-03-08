import { useLayoutEffect } from 'locomotor'

let initial = true

function Filter ({ filter, filterTodo }) {
  const updateUrl = e => {
    filterTodo(e.target.hash)
  }

  useLayoutEffect(() => {
    if (initial) {
      initial = false
      if (!filter.find(({ href }) => href === window.location.hash)) {
        window.history.pushState({}, null, '#/all')
      }
    }
  })

  return (
    <ul id='filters' className='filters'>
      {Array.from(filter, ({ name, href, selected }) => {
        return (
          <li id={name} onClick={updateUrl}>
            <a className={selected ? 'selected' : ''} href={href}>
              {name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Filter
