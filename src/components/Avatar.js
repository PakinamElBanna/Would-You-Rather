import React, { Component } from 'react'
import { connect } from 'react-redux'
import emptyAvatar from '../avatar.png'
import './Avatar.css'

const Avatar = ({user}) =>
      <div className="avatar">
        {user?
          <img className="avatar-img" src={user.avatarURL}/>
          :
          <img className="avatar-img" src={emptyAvatar}/>
        }
      </div>


export default Avatar
