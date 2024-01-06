// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, maxScore, playAgain} = props

  const wonImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const loseImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  let image = ''
  let message = ''
  let description = ''
  if (score === maxScore) {
    image = wonImg
    message = 'You Won'
    description = 'Best Score'
  } else {
    image = loseImg
    message = 'You Lose'
    description = 'Score'
  }

  const restart = () => {
    playAgain()
  }

  return (
    <div className="result-card-container">
      <div className="result-image-container">
        <img className="result-image" src={image} alt="win or lose" />
      </div>
      <div className="result-desc-container">
        <h1 className="win-or-lose-message">{message}</h1>
        <p className="score-heading">{description}</p>
        <p className="score-count">
          {score}/{maxScore}
        </p>
        <button className="play-again-btn" type="button" onClick={restart}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
