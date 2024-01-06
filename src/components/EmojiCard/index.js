// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onEmojiClick} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const onClickHandler = () => {
    onEmojiClick(id)
  }

  return (
    <li className="emoji-card">
      <button onClick={onClickHandler} className="emoji-button" type="button">
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
