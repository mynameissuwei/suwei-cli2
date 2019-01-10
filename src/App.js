import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader' //eslint-disable-line
import Header from './Components/Header/Header.jsx'

const root = document.getElementById('root')

const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  )
}

render(Header)

if (module.hot) {
  module.hot.accept('./Components/Header/Header.jsx', () => {
    const NextApp = require('./Components/Header/Header.jsx').default //eslint-disable-line
    render(NextApp)
  })
}
