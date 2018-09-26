import React, { Component } from 'react'
import './Votes.css'
import Avatar from './Avatar'

class Votes extends Component {

  isSelected = (option) => {
    const optionName = this.props.question[option]
    const {authedUser, users} = this.props
    return optionName.votes.includes(authedUser)
  }

  render() {
    const { authedUser, users } = this.props
    const optionOnePercentage = (this.props.question.optionOne.votes.length/(this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length)) * 100
    const optionTwoPercentage = (this.props.question.optionTwo.votes.length/(this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length)) * 100
    const sum = this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length
    const { optionOne, optionTwo } = this.props.question

    const optionTwoStyle = () => {
    const width = `${optionTwoPercentage}%`
    const style =  {width: width}
    return style
    }

    const optionOneStyle = () => {
    const width = `${optionOnePercentage}%`
    const style =  {width: width}
    return style
    }

    return (
      <div className="Votes">
        <div className="Vote">
          <p>{optionOne.text}</p>
          <div className={this.isSelected('optionOne') ? "Vote-Container selectedbyAuthedUser" : "Vote-Container"} >
          {this.isSelected('optionOne') && <div className="Vote-Avatar"><Avatar user={users[authedUser]} /></div>}
          <div className="Vote-Bar">
            <div className="Vote-Bar-Width" style={optionOneStyle()}></div>
          </div>
          <span className="Vote-Number">{optionOnePercentage}% ({this.props.question.optionOne.votes.length} of {sum} votes )</span>
          </div>
        </div>
        <div className="Vote">
        <p>{optionTwo.text}</p>
        <div className={this.isSelected('optionTwo') ? "Vote-Container selectedbyAuthedUser" : "Vote-Container"} >
        {this.isSelected('optionTwo') && <div className="Vote-Avatar"><Avatar user={authedUser} /></div>}
        <div className="Vote-Bar">
          <div className="Vote-Bar-Width" style={optionTwoStyle()}></div>
        </div>
        <span className="Vote-Number">{optionTwoPercentage}% ({this.props.question.optionTwo.votes.length} of {sum} votes )</span>
        </div>
        </div>
      </div>
    )
  }
}
export default Votes
