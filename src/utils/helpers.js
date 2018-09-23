export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}


export function formatQuestion (question) {
  const { optionOneText, optionTwoText } = question.question
  const { author } = question
  return {
    optionOneText,
    optionTwoText,
    author
  }
}
