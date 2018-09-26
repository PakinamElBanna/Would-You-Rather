import React, { Component } from 'react'
import Question from './Question'

class QuestionPage extends Component {
  componentWillUnmount(){

  }
    render() {
      const { id } = this.props.match.params
      return (
        <div>
          { id && <Question id={id}/> }
        </div>
      )
    }
}
export default QuestionPage
