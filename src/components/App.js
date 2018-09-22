import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import { connect } from 'react-redux'
import Icon from '@material-ui/core/Icon'

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import NewPoll from './NewPoll'
import Login from './Login'


class App extends Component {
  render() {
    const {users, authedUser} = this.props
    return (
      <div className="App">
        <Router>
          <Fragment>
              <AppHeader users={users} authedUser={authedUser} />
              <div className="App-container">
                <div>
                  <Route path='/' exact component={Login} />
                  <Route path='/add' component={NewPoll} />
                </div>
              </div>
          </Fragment>
        </Router>
        <AppFooter />
      </div>
    );
  }
}


function mapStateToProps({users, authedUser}){
  return {
    users,
    authedUser
  }
}


export default connect(mapStateToProps)(App);
