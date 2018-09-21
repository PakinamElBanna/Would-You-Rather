import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Navigation.css'

class Navigation extends Component {
  render() {
    const { authedUser } = this.props
    return (
      <div className="Navigation">
        <ul className="Navigation-list">
          <li className="Navigation-item">Home</li>
          <li className="Navigation-item">Create Poll</li>
          <li className="Navigation-item">LeaderBoard</li>
        </ul>
      </div>
    )
  }
}

export default Navigation
