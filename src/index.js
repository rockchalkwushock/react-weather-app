import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { render } from 'react-dom'

// import { App } from './components'
import { App } from './containers'
import { client } from './data'
import registerServiceWorker from './registerServiceWorker'

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
