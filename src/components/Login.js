import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Login.css'
import { withRouter } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Avatar from './Avatar'
import { setAuthedUser } from '../actions/authedUser'
import { setSelectedUser } from '../actions/selectedUser'

class Login extends Component {
  state = {
    userId: 'johndoe',
    authed: false
  }

componentDidMount() {
  this.props.dispatch(setSelectedUser(this.state.userId))
}

handleUserChange = event => {
  event.preventDefault()
  this.props.dispatch(setSelectedUser(event.target.value))
  this.setState(() => ({
    userId: event.target.value
}))
}

handleAuthedUser = event => {
  event.preventDefault()
  this.props.dispatch(setAuthedUser(this.state.userId))
  setTimeout(() => {
  this.props.history.push("/home")
  }, 0.005)
}


  render() {
    const { userId } = this.state
    return (
      <div className="sub-container">
        <h1 className="title">Please Login</h1>
        <div className="med-avatar center Login-avatar"><Avatar user={this.props.users[userId]} /></div>
        <form onSubmit={this.handleAuthedUser} className="login-form">
        <FormControl fullWidth>
          <Select value={userId} onChange={this.handleUserChange}>
            {this.props.userIds.map((user) => (
              <MenuItem key={user} value={user}>{user}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="button">
          <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
         </Button>
        </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps({users, authedUser}){
  return {
    authedUser,
    userIds: Object.keys(users),
    users
  }
}

export default withRouter(connect(mapStateToProps)(Login))
