import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Button from '@material-ui/core/Button';
import './Home.css'

class Home extends Component {
  state = {
    tab: 'Unanswered'
  }

  handleDisplayQuestions = (e) => {
    e.preventDefault()
    const tabName = e.target.innerText
    this.setState({
      tab: tabName
    })
  }

  goBack = (e) => {
    e.preventDefault()
    this.setState({
      tab: 'Unanswered'
    })
  }

  render() {
    const { tab } = this.state
    return (
      <div>
      <ul className="Questions-Navigation">
        <li onClick={this.handleDisplayQuestions}  className={tab === 'Unanswered' ? 'Questions-item active' : 'Questions-item'}>Unanswered</li>
        <li onClick={this.handleDisplayQuestions} className={tab === 'Answered' ? 'Questions-item active' : 'Questions-item'}>Answered</li>
      </ul>
      <ul className="Questions-List">
        {this.state.tab === 'Answered' ?
          this.props.orderedAnsweredQuestions.length> 0 ?
          this.props.orderedAnsweredQuestions.map((question) => (
          <li key={question.id}>
          <Question question={question}/>
          </li>
        )) : <p>You have no answered questions. Why not vote on some polls?</p>
        :
        this.props.orderedUnansweredQuestions.length > 0 ?
        this.props.orderedUnansweredQuestions.map((question) => (
          <li key={question.id}>
          <Question question={question}/>
          </li>
        )) :
           <div>
             <p>You have no unanswered questions. :)</p>
           </div>}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({questions, users, authedUser}){
  if (users[authedUser]) {
    const questionKeys = Object.keys(users[authedUser].answers)
    const answeredQuestions = Object.keys(questions).filter(key => questionKeys.includes(key)).reduce((obj, key) => {obj[key] = questions[key]
    return obj;
    }, {});
    const unansweredQuestions = Object.keys(questions).filter(key => !questionKeys.includes(key)).reduce((obj, key) => {obj[key] = questions[key]
    return obj;
    }, {});
    const orderedUnansweredQuestions = Object.keys(unansweredQuestions).map(key => questions[key]).sort((a, b) =>
    a.timestamp< b.timestamp ? 1 : -1)
    const orderedAnsweredQuestions = Object.keys(answeredQuestions).map(key => questions[key]).sort((a, b) =>
    a.timestamp< b.timestamp ? 1 : -1)
    return {
      orderedUnansweredQuestions,
      orderedAnsweredQuestions
    }
  }
}

export default connect(mapStateToProps)(Home)
