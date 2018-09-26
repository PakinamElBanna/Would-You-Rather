import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { Redirect } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import NewPoll from './NewPoll'
import Login from './Login'
import Home from './Home'
import QuestionPage from './QuestionPage'
import Leaderboard from './Leaderboard'
import NoMatch from './NoMatch'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
      : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const {users, authedUser} = this.props
    return (
      <div className="App">
        <Router>
          <Fragment>
              <LoadingBar />
              { authedUser && <AppHeader authedUser={this.props.users[authedUser]} />}
              <div className="App-container">
                <Switch>
                  <Route path='/login' component={Login} />
                  <PrivateRoute authed={authedUser !== null} exact path='/' component={Home} />
                  <PrivateRoute authed={authedUser !== null} path='/home' component={Home} />
                  <PrivateRoute authed={authedUser !== null} path='/add' component={NewPoll} />
                  <PrivateRoute authed={authedUser !== null} path='/questions/:id' component={QuestionPage} />
                  <PrivateRoute authed={authedUser !== null} path='/leaderboard' component={Leaderboard} />
                  <Route component={NoMatch} />
              </Switch>
              </div>
          </Fragment>
        </Router>
        <AppFooter />
      </div>
    );
  }
}


function mapStateToProps({users, questions, authedUser}){
  return {
    users,
    questions,
    authedUser
  }
}


export default connect(mapStateToProps)(App)
