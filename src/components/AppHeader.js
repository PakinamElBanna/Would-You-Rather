import React from 'react'
import Navigation from './Navigation'
import Avatar from './Avatar'
import logo from '../logo.svg'

const  AppHeader = ({ users, authedUser }) =>

      <div className="App-header">
      <img className='logo' src={logo} />
      {authedUser !== null && <div className="App-Navigation">
        <Navigation />
          <div className="small-avatar">
            <Avatar user={users[authedUser]} />
          </div>
        </div>}
      </div>

export default AppHeader
