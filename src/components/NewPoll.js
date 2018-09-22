import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { formatQuestion } from '../utils/helpers'
import { handleAddQuestion } from '../actions/questions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class NewPoll extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    author: null,
    toHome: false
  }

  isDisabled () {
    return this.state.optionOneText.length < 1  || this.state.optionTwoText.length < 1
  }

  handleOptionOne = (e) => {
    e.preventDefault()
    const optionOneText = e.target.value
    this.setState(() => ({
      optionOneText
    }))
  }

  handleOptionTwo = (e) => {
    e.preventDefault()
    const optionTwoText = e.target.value
    this.setState(() => ({
      optionTwoText
    }))
  }

  handleAddPoll (e) {
    e.preventDefault()
      const { optionOneText, optionTwoText, author } = this.state
      const question = {
        optionOneText,
        optionTwoText,
        author
      }
      const { dispatch } = this.props
      dispatch(handleAddQuestion(question))
      .then(() => this.setState(() => ({
        toHome: true
      })))
    }

  render() {
    const { optionOneText , optionTwoText, toHome } = this.state
    const { authedUser } = this.props

    if( authedUser === null || toHome === true ) {
      return <Redirect to='/' />
    }

    return (
      <div className="sub-container">
        <h1 className="title">Would you rather..</h1>
        <form onSubmit={this.handleAddPoll.bind(this)}>
          <TextField
              required
              id="standard-required"
              label="Option one"
              fullWidth
              margin="normal"
              value={optionOneText}
              onChange={this.handleOptionOne}
              />
          <TextField
              required
              id="standard-required"
              label="Option two"
              fullWidth
              margin="normal"
              value={optionTwoText}
              onChange={this.handleOptionTwo}
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
