import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderboardCard from './LeaderboardCard'

class Leaderboard extends Component {
  render() {
    const { users } = this.props
    return (
      <div className="Leaderboard">
        <ul>
        {users.map((user) => (
          <li key={user.id}>
            <LeaderboardCard user={user} />
          </li>
        ))}</ul>
      </div>
    )
  }
}

function mapStateToProps({users, questions}){
  return {
    users:  Object.keys(users).map(key => users[key]).sort((a, b) =>
    (a.questions.length + Object.keys(a.answers).length) < (b.questions.length +  Object.keys(b.answers).length)  ? 1 : -1)
  }
}

export default connect(mapStateToProps)(Leaderboard)
