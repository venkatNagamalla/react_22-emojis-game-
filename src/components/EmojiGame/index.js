/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {allEmojisList: [], isGameInProgress: true, topScore: 0}

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  gameOver = score => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (score > topScore) {
      newTopScore = score
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  onEmojiClick = id => {
    const {emojisList} = this.props
    const {allEmojisList} = this.state
    const isEmojiPresent = allEmojisList.includes(id)
    const clickedEmojisLen = allEmojisList.length
    if (isEmojiPresent) {
      this.gameOver(clickedEmojisLen)
    } else {
      if (clickedEmojisLen === emojisList.length - 1) {
        this.gameOver(emojisList.length)
      }
      this.setState(prevState => ({
        allEmojisList: [...prevState.allEmojisList, id],
      }))
    }
  }

  renderEmojisCardList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="list-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            onEmojiClick={this.onEmojiClick}
            emojiDetails={eachEmoji}
            key={eachEmoji.id}
          />
        ))}
      </ul>
    )
  }

  playAgain = () => {
    this.setState({allEmojisList: [], isGameInProgress: true})
  }

  renderScoreDetails = () => {
    const {allEmojisList} = this.state
    const {emojisList} = this.props
    return (
      <div className="result-card">
        <WinOrLoseCard
          score={allEmojisList.length}
          maxScore={emojisList.length}
          playAgain={this.playAgain}
        />
      </div>
    )
  }

  render() {
    const {allEmojisList, isGameInProgress, topScore} = this.state
    return (
      <div className="bg-container">
        <NavBar
          isEmojiPresent={isGameInProgress}
          topScore={topScore}
          score={allEmojisList.length}
          isGameInProgress={isGameInProgress}
        />
        <div className="card-container">
          {isGameInProgress
            ? this.renderEmojisCardList()
            : this.renderScoreDetails()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
