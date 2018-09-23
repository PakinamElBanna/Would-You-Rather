import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import { connect } from 'react-redux'
import Icon from '@material-ui/core/Icon'
import { handleGetUsers } from '../actions/users'

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import NewPoll from './NewPoll'
import Login from './Login'
import Home from './Home'
import Question from './Question'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers())
  }

  render() {
    const {users, authedUser} = this.props
    return (
      <div className="App">
        <Router>
          <Fragment>
              <AppHeader users={users} authedUser={authedUser} />
              <div className="App-container">
                <div>
                  <Route path='/login' component={Login} />
                  <Route path='/home' component={Home} />
                  <Route path='/add' component={NewPoll} />
                  <Route path='/questions/:id' component={Question}/>
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
