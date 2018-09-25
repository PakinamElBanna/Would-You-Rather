import React, { Component } from 'react'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import './Navigation.css'

class Navigation extends Component {
  render() {
    const logout = ()  =>  {
      this.props.dispatch(setAuthedUser(null))
      this.props.history.push('/home')
    }

    const { authedUser } = this.props
    return (
      <div className="Navigation">
        <ul className="Navigation-list">
          <li className="Navigation-item">
          <NavLink to='/home'>
            Home
          </NavLink>
          </li>
          <li className="Navigation-item">
          <NavLink to='/add'>
            Create Poll
          </NavLink>
          </li>
          <li className="Navigation-item">
          <NavLink to='/leaderboard'>
            Leaderboard
          </NavLink>
          </li>
          <li className="Navigation-item" onClick={logout}>
            Logout
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(connect()(Navigation))
