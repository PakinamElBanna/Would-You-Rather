import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
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
    const option= e.target.value
    this.setState(() => ({
      option
    }))
  }

  handleClick = () => {
    if(!this.props.question) {
      if(this.state.displayVotes) {
        this.props.history.push('/home')
      } else {
        return this.submitAnswer()
      }
    }
  }

  submitAnswer = () => {
      const { option } = this.state
      const answer = {
        authedUser: this.props.authedUser,
        qid: this.props.id,
        answer: option
      }
      const { dispatch } = this.props
      dispatch(handleAnswerQuestion(answer))
      .then(() => this.setState(() => ({
          displayVotes: true,
          option: ''
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
                    <Button variant="contained" color="primary" onClick={this.handleClick} disabled={!question && this.state.option === '' && !displayVotes}>
                      {question? <Link className="Button-Link" to={{pathname:`/questions/${question.id}`, state: {from: this.props.location}}}>View Poll</Link>
                      :
                      displayVotes === false?<span>Vote</span>
                    :<Link className="Button-Link" to={'/home'}>Back</Link>}
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

export default withRouter(connect(mapStateToProps)(Question))
