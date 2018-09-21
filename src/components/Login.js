import React, { Component } from 'react'
import './Login.css'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Avatar from './Avatar'

class Login extends Component {
  state = {
    user: 3
  }

handleUserChange = event => {
  event.preventDefault()
  this.state.user = event.target.value
};

  render() {
    const { user } = this.state
    const user1 = "usere"
    return (
      <div className="login-container">
        <h1 className="title">Please Login</h1>
        <Avatar />
        <form className="login-form">
        <FormControl fullWidth>
          <Select
          value={this.state.user}
          onChange={this.handleUserChange}>
          name="user"
          <MenuItem key="3" value={3}>{user1}</MenuItem>
          </Select>
        </FormControl>
        <div className="login-button">
          <Button variant="contained" color="primary" fullWidth>
          Login
         </Button>
        </div>
        </form>
      </div>
    )
  }
}

export default Login
