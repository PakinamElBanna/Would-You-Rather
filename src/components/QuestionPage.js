import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionPage extends Component {
render(){
  return(
    <div>
      {this.props.location.state && this.props.authedUser?
        this.props.match.params && <Question id={this.props.match.params.id}/>
      :
      <Redirect to="/404"/>}
    </div>
  )
}

}

function mapStateToProps({authedUser}){
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(QuestionPage)
