// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, score, isGameInProgress} = props

  return (
    <nav className="nav-container">
      <div className="emoji-logo-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>

      {isGameInProgress && (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
