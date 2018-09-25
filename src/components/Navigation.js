import React, { Component } from 'react'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

class Navigation extends Component {
  render() {
    const logout = ()  =>  {
      this.props.dispatch(setAuthedUser(null))
    }

    const { authedUser } = this.props
    return (
      <div className="Navigation">
        <ul className="Navigation-list">
          <li className="Navigation-item">
          <NavLink to='/home' activeClassName='active'>
            Home
          </NavLink>
          </li>
          <li className="Navigation-item">
          <NavLink to='/add' activeClassName='active'>
            Create Poll
          </NavLink>
          </li>
          <li className="Navigation-item">
          <NavLink to='/leaderboard' activeClassName='active'>
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

export default connect()(Navigation)
