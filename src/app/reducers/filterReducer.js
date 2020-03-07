import { camelCase } from '../utils'

export const intialFilter = Array.from(['all', 'active', 'completed'], page => {
  return {
    href: `#/${page}`,
    name: camelCase(page),
    selected: ''
  }
})

export const filterReducer = (state, href) => {
  return Array.from(state, filter =>
    filter.href === href ? ({ ...filter, selected: 'selected' }) : ({ ...filter, selected: '' })
  )
}
