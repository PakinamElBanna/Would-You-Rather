import React from 'react'
import { Redirect } from 'react-router-dom'
import Question from './Question'

const QuestionPage = (props) => (
        <div>
          {props.location.state && props.location.state.from.pathname === "/home"?
            props.match.params && <Question id={props.match.params.id}/>
          :
          <Redirect to="/404"/>}
        </div>
)
export default QuestionPage
