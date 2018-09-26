import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetQuestions, handleGetAnsweredQuestions } from '../actions/questions'
import Question from './Question'
import './Home.css'

class Home extends Component {
  state = {
    tab: 'unanswered'
  }

  componentDidMount() {
  this.props.dispatch(handleGetQuestions())
}

  handleDisplayQuestions = (e) => {
    e.preventDefault()
    const tab = e.target.innerText
    this.setState(() => {
      tab
    })
  }

  render() {
    return (
      <div>
      <ul className="Questions-Navigation">
        <li onClick={this.handleDisplayQuestions}  className="Questions-item">unanswered</li>
        <li onClick={this.handleDisplayQuestions} className="Questions-item">answered</li>
      </ul>
      <ul className="Questions-List">
        {this.props.orderedQuestions.map((question) => (
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
    let orderedQuestions = Object.keys(questions).map(key => questions[key]).sort((a, b) =>
    a.timestamp< b.timestamp ? 1 : -1)
  return {
    orderedQuestions,
    questionsIds: Object.keys(questions)
  .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Home)
