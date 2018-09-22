export function formatQuestion (question) {
  const { optionOneText, optionTwoText } = question.question
  const { author } = question
  return {
    optionOneText,
    optionTwoText,
    author
  }
}
