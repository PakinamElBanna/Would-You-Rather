import React from 'react'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({onLogoutClick}) =>
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
          <li className="Navigation-item" onClick={() => onLogoutClick(null)}>
            Logout
          </li>
        </ul>
      </div>

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutClick: (id) => {
      dispatch(setAuthedUser(id))
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Navigation))
