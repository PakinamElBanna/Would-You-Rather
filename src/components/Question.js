import React, { Component } from 'react'
import { connect } from 'react-redux'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import {formatDate} from '../utils/helpers'
import { handleAnswerQuestion } from '../actions/questions'
import Avatar from './Avatar'
import './Question.css'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {

  state = {
    option: '',
    displayVotes: false
  }

  handleOptionChange = (e) => {
    e.preventDefault()
    const option= e.target.value
    this.setState(() => ({
      option
    }))
  }

  submitAnswer = (e) => {
    e.preventDefault()
      const { option } = this.state
      const answer = {
        authedUser: this.props.authedUser,
        qid: this.props.id,
        answer: option
      }
      const { dispatch } = this.props
      dispatch(handleAnswerQuestion(answer))
      .then(() => {this.setState(() => {
        displayVotes : true
      })
    console.log(this.props.questions[this.props.id])})
  }

  render () {
    const { questions, question, users, id } = this.props
    const { author, optionOne, optionTwo } = question? question : questions[id]
    const { option } = this.state

    return (
      <div className="Question">
          <div className="Question-container">
            <h2 className="Question-header">{question? author : questions[id].author} asks</h2>
            <div className="Question-body">
              <div className="Question-Avatar">
                <Avatar user={question? users[author] : users[questions[id].author] } />
                <p className="Question-timestamp">{ question? formatDate(question.timestamp) : questions[id].timestamp}</p>
              </div>
              <div className="Question-content">
                <h1 className="Question-title">Would you rather..</h1>
                <div className="Question-options">
                  {this.props.id &&
                    <FormControl component="fieldset">
                     <RadioGroup
                       aria-label="Gender"
                       name="gender1"
                       value={option}
                       onChange={this.handleOptionChange}
                     >
                       <FormControlLabel value="optionOne" control={<Radio />} label={optionOne.text} />
                       <FormControlLabel value="optionTwo" control={<Radio />} label={optionTwo.text} />
                     </RadioGroup>
                   </FormControl>}
                   {this.props.question &&
                   <div className="Question-options">
                   <p>{optionOne.text} or {optionTwo.text}</p>
                   </div>}
                </div>
                <div className="Question-button">
                    <Button variant="contained" color="primary" onClick={question? null : this.submitAnswer} disabled={!question && this.state.option === ''}>
                      {question? <Link className="Button-Link" to={`/questions/${question.id}`}>View Poll</Link>
                      :
                      <span>Vote</span>}
                   </Button>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

function mapStateToProps({users, questions, authedUser}, {id = null, question = null}){
  return {
    users,
    authedUser,
    questions,
    id
  }
}

export default connect(mapStateToProps)(Question)
