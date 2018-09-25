import React, { Component } from 'react'
import Question from './Question'

class QuestionPage extends Component {
    render() {
      const { id } = this.props.match.params
      return (
        <div>
          <Question id={id}/>
        </div>
      )
    }
}
export default QuestionPage
