import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetQuestions } from '../actions/questions'
import Question from './Question'
import './Home.css'

class Home extends Component {
  state = {
    tab: 'unanswered'
  }

  componentDidMount() {
  this.props.dispatch(handleGetQuestions())
  this.filterQuestions()
  }

  filterQuestions = () => {
   // filter questions based on current tab
  }

  handleDisplayQuestions = (e) => {
    e.preventDefault()
    const tab = e.target.innerText
    this.setState(() => {
      tab
    })
  }

  render() {
    const { questions } = this.props
    return (
      <div>
      <ul className="Questions-Navigation">
        <li onClick={this.handleDisplayQuestions}  className="Questions-item">unanswered</li>
        <li onClick={this.handleDisplayQuestions} className="Questions-item">answered</li>
      </ul>
      <ul className="Questions-List">
        {Object.values(this.props.questions).map((question) => (
          <li key={question.id}>
          <Question question={question}/>
          </li>
        ))
        }
        </ul>
      </div>
    )
  }
}

function mapStateToProps({questions}){
    let orderedQuestions = {}
    Object.keys(questions).sort().forEach(function(key){
    orderedQuestions[key] = questions[key]
    })
  return {
    questions: orderedQuestions,
    questionsIds: Object.keys(questions)
  .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Home)
