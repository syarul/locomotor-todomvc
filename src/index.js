import App from './app'

import { locoDOM } from 'locomotor'

let props = { todo: 'called' }

locoDOM.render(
  <App {...props} />,
  document.body
)
