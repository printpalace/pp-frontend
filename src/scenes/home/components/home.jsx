import React, { Component } from 'react'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import  Header from '../../core/components/header/header.jsx'
import Taba from './tabs/tabs.jsx'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: 'green'
  },
  appBar: {
    height: 50
  }
})
export default class Home extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header/>
          <Taba/>
        </div>
      </MuiThemeProvider>
    )
  }
}

