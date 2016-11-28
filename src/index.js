import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Home from './scenes/home/components/home.jsx'

import './styles/app.scss'

render(
  <Provider>
    <div className='app'>
      <Home/>
    </div>
  </Provider>,
  document.getElementById('root')
)
