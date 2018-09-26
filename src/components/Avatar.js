import React from 'react'
import emptyAvatar from '../avatar.png'
import './Avatar.css'

const Avatar = ({user}) =>
      <div className="avatar">
        {user?
          <img className="avatar-img" src={user.avatarURL} alt={user.name}/>
          :
          <img className="avatar-img" src={emptyAvatar} alt="no avatar"/>
        }
      </div>


export default Avatar
