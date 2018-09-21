import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import { connect } from 'react-redux'
import Icon from '@material-ui/core/Icon'
import logo from '../logo.svg'
import { TiHeartFullOutline } from 'react-icons/ti/index'

import Login from './Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className='logo' src={logo} />
        <div className="App-container">
          <Router>
            <Route path='/' exact component={Login} />
          </Router>
        </div>
        <div className="App-footer">
          <p>Made with <TiHeartFullOutline className="footer-icon"/> by: Pakinam EL Banna</p>
        </div>
      </div>
    );
  }
}

export default connect()(App);
