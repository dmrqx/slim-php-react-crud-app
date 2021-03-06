import 'core-js/es/map'
import 'core-js/es/set'
import 'raf/polyfill'

import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Store from './store'
import { AppContextProvider } from './contexts'
import ROUTES from './routes'

const rootComponent = (
  <Store>
    <AppContextProvider>
      <Router>
        <Switch>
          {ROUTES.map(props => (
            <Route {...props} />
          ))}
        </Switch>
      </Router>
    </AppContextProvider>
  </Store>
)
const rootElement = document.getElementById('app')

render(rootComponent, rootElement)
