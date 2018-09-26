import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetUserScores } from '../actions/users'
import LeaderboardCard from './LeaderboardCard'

class Leaderboard extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUserScores())
  }
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

function mapStateToProps({users}){
  return {
    users:  Object.keys(users).map(key => users[key]).sort((a, b) =>
    a.score< b.score ? 1 : -1)
  }
}

export default connect(mapStateToProps)(Leaderboard)
