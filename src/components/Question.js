import React, { Component } from 'react'
import { connect } from 'react-redux'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import {formatDate} from '../utils/helpers'
import { handleAnswerQuestion } from '../actions/questions'
import Avatar from './Avatar'
import './Question.css'
import { Link } from 'react-router-dom'
import Votes from './Votes'
import {TiArrowLeft} from 'react-icons/ti/index'

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
      .then(() => this.setState(() => ({
          displayVotes: true
      }))
    )
  }

  render () {
    const { questions, question, users, id, authedUser } = this.props
    const { author, optionOne, optionTwo } = question? question : questions[id]
    const { option, displayVotes } = this.state

    return (
      <div className="Question">
          { !question &&
              <Link className="Back" to={'/home'}><TiArrowLeft /></Link>
          }
          <div className="Question-container">
            <h2 className="Question-header">{question? author : questions[id].author} asks</h2>
            <div className="Question-body">
              <div className="Question-Avatar">
                <Avatar user={question? users[author] : users[questions[id].author] } />
                <p className="Question-timestamp">{ question? formatDate(question.timestamp) : formatDate(questions[id].timestamp)}</p>
              </div>
              <div className="Question-content">
                <h1 className="Question-title">Would you rather..</h1>
                <div className="Question-options">
                  {this.props.id && displayVotes === false &&
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
                   {this.props.id && displayVotes === true &&
                     <Votes question={questions[id]} authedUser={authedUser} users={users}/>
                     }
                   {this.props.question &&
                   <div className="Question-options">
                   <p>{optionOne.text} or {optionTwo.text}</p>
                   </div>}
                </div>
                 <div className="Question-button">
                    <Button variant="contained" color="primary" onClick={question? this.goBack : this.submitAnswer} disabled={!question && this.state.option === ''}>
                      {question? <Link className="Button-Link" to={`/questions/${question.id}`}>View Poll</Link>
                      :
                      displayVotes === false ? <span>Vote</span>
                      :
                      <span><Link className="Button-Link" to={'/home'}>Back</Link></span>}
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
