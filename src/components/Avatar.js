import React, { Component } from 'react'
import emptyAvatar from '../avatar.png'
import './Avatar.css'

class Avatar extends Component {
  render(){
    return (
      <div className="avatar">
        <img className="avatar-img" src={emptyAvatar}/>
      </div>
    )
  }
}
export default Avatar
