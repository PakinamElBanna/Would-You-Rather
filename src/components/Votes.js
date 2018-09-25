import React, { Component } from 'react'
import './Votes.css'

class Votes extends Component {
  componentDidMount(){
    const total = this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length
    const optionOneVotes = this.props.question.optionOne.votes.length
    const optionTwoVotes = this.props.question.optionTwo.votes.length

  }

  isSelected = (option) => {
    const optionName = this.props.question[option]
    const {authedUser} = this.props
    return optionName.votes.includes(authedUser)
  }

  render() {
    const optionOnePercentage = (this.props.question.optionOne.votes.length/(this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length)) * 100
    const optionTwoPercentage = (this.props.question.optionTwo.votes.length/(this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length)) * 100
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
          <div className="Vote-Bar">
            <div className="Vote-Bar-Width" style={optionOneStyle()}></div>
          </div>
          <span className="Vote-Number">{optionOnePercentage}%</span>
          </div>
        </div>
        <div className="Vote">
        <p>{optionTwo.text}</p>
        <div className={this.isSelected('optionTwo') ? "Vote-Container selectedbyAuthedUser" : "Vote-Container"} >
        <div className="Vote-Bar">
          <div className="Vote-Bar-Width" style={optionTwoStyle()}></div>
        </div>
        <span className="Vote-Number">{optionTwoPercentage}%</span>
        </div>
        </div>
      </div>
    )
  }
}
export default Votes