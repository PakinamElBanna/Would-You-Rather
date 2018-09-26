import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Question from './Question'

class QuestionPage extends Component {
    render() {
      const { id } = this.props.match.params
      return (
        <div>
          {this.props.location.state && this.props.location.state.from.pathname === "/home"?
           id && <Question id={id}/>
          :
          <Redirect to="/404"/>}
        </div>
      )
    }
}
export default QuestionPage
