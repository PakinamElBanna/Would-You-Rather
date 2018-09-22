import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

class Navigation extends Component {
  render() {
    const { authedUser } = this.props
    return (
      <div className="Navigation">
        <ul className="Navigation-list">
          <li className="Navigation-item">
          <NavLink to='/' activeClassName='active'>
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
        </ul>
      </div>
    )
  }
}

export default Navigation
