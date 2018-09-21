import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Login.css'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Avatar from './Avatar'
import { handleGetUsers } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'
import { setSelectedUser } from '../actions/selectedUser'

class Login extends Component {
  state = {
    userId: 'johndoe'
  }

componentDidMount() {
  this.props.dispatch(handleGetUsers())
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
}


  render() {
    const { userId } = this.state
    return (
      <div className="login-container">
        <h1 className="title">Please Login</h1>
        <Avatar user={this.props.users[userId]} />
        <form onSubmit={this.handleAuthedUser} className="login-form">
        <FormControl fullWidth>
          <Select value={userId} onChange={this.handleUserChange}>
            {this.props.userIds.map((user) => (
              <MenuItem key={user} value={user}>{user}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="login-button">
          <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
         </Button>
        </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps({users}){
  return {
    userIds: Object.keys(users),
    users
  }
}

export default connect(mapStateToProps)(Login)
