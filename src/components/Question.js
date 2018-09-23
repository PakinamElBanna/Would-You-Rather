import React, { Component } from 'react'
import { connect } from 'react-redux'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import {formatDate} from '../utils/helpers'
import Avatar from './Avatar'
import './Question.css'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {

  state = {
    option: ''
  }

  handleOptionChange = (e) => {
    e.preventDefault()
    const option= e.target.value
    this.setState(() => ({
      option
    }))
  }

  render () {
    const { questions, id, question, users } = this.props
    const { author, optionOne, optionTwo } = question? question : this.props.questions[this.props.id]
    const { option } = this.state

    return (
      <div className="Question">
          <div className="Question-container">
            <h2 className="Question-header">{question&& author} asks</h2>
            <div className="Question-body">
              <div className="Question-Avatar">
                <Avatar user={question && users[author]} />
                <p className="Question-timestamp">{ formatDate(question.timestamp)}</p>
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
                       <FormControlLabel value="female" control={<Radio />} label={optionOne.text} />
                       <FormControlLabel value="male" control={<Radio />} label={optionTwo.text} />
                     </RadioGroup>
                   </FormControl>}
                   {this.props.question &&
                   <div className="Question-options">
                   <p>{optionOne.text} or {optionTwo.text}</p>
                   </div>}
                </div>
                <div className="Question-button">
                    <Button variant="contained" color="primary">
                      {question? <Link className="Button-Link" to={question && `/questions/${question.id}`}>View Poll</Link> : null}
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
    questions
  }
}

export default connect(mapStateToProps)(Question)
