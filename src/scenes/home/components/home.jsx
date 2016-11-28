import React, { Component } from 'react'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import  Header from '../../core/components/header/header.jsx'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: 'green'
  },
  appBar: {
    height: 40
  }
})
export default class Home extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header/>
        </div>
      </MuiThemeProvider>
    )
  }
}

