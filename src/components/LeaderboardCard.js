import React, { Component } from 'react'
import Avatar from './Avatar'
import './LeaderboardCard.css'

class LeaderboardCard extends Component {
  render() {
    const { user } = this.props
    return (
      <div className="LeaderboardCard">
        <div className="LeaderboardCard-Avatar">
          <Avatar user={user} />
        </div>
        <div className="LeaderboardCard-Details">
          <h1 className="LeaderboardCard-Name">{user.name}</h1>
          <div className="LeaderboardCard-Numbers">
            <div className="LeaderboardCard-Number">
              <p>Answered questions</p>
              <p>{Object.keys(user.answers).length}</p>
            </div>
            <div className="LeaderboardCard-Number">
              <p>Created questions</p>
              <p>{user.questions.length}</p>
            </div>
          </div>
        </div>
        <div className="LeaderboardCard-Score">
          <div className="LeaderboardCard-Score-Container">
            <h1 className="LeaderboardCard-Score-Title">Score</h1>
            <p className="LeaderboardCard-Score-Number">{user.questions.length + Object.keys(user.answers).length}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default LeaderboardCard
