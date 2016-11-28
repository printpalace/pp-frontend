import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Home from 'material-ui/svg-icons/action/home'
import FlatButton from 'material-ui/FlatButton'

import './header.scss'
export default class Header extends Component {

  render() {
    return (
      <div>
      <header>
        <AppBar title='PrintPalace' 
          iconElementLeft={<IconButton><Home /></IconButton>}
          iconElementRight={<FlatButton label='Login' />}
        />
      </header>
    </div>
    )
  }
}

