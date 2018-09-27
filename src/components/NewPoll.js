import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class NewPoll extends Component {
  constructor(props) {
  super(props);
  this.state = {
    optionOne: '',
    optionTwo: '',
    author: this.props.authedUser
  }
}

  isDisabled () {
    return this.state.optionOne.length < 3  || this.state.optionTwo.length < 3
  }

  handleOption = (e) => {
    const key = e.target.id
    const value= e.target.value
    this.setState(() => ({
      [key]: value
    }))
  }

  handleAddPoll (e) {
    e.preventDefault()
      const { dispatch } = this.props
      dispatch(handleAddQuestion(this.state))
      .then(() => this.props.authedUser? this.props.history.push("/home") : null)
    }

  render() {
    const { optionOne , optionTwo } = this.state
    return (
      <div className="sub-container">
        <h1>Would you rather..</h1>
        <form onSubmit={this.handleAddPoll.bind(this)}>
          <TextField
              required
              id="optionOne"
              label="Option one"
              fullWidth
              margin="normal"
              value={optionOne}
              onChange={this.handleOption}
              />
          <TextField
              required
              id="optionTwo"
              label="Option two"
              fullWidth
              margin="normal"
              value={optionTwo}
              onChange={this.handleOption}
              />
          <div className="button">
            <Button disabled={this.isDisabled()} type="submit" variant="contained" color="primary" fullWidth>
              Submit
           </Button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps({users, authedUser}){
  return {
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(NewPoll))
