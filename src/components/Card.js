export default function Card(props) {
  function handleClick() {
    props.onCardClick(props);
  }

  return (
    <div className="elements__element">
      <div className="elements__image" style={{ backgroundImage: `url(${props.link})` }}
        onClick={handleClick}>
        <button className="elements__delete button-hover" aria-label="Delete" type="button">
        </button>
      </div>
      <div className="elements__wrapper">
        <h2 className="elements__title">
          {`${props.name}`}
        </h2>
        <div className="elements__like-wrapper">
          <button className="elements__heart button-hover" aria-label="Like" type="button">
          </button>
          <span className="elements__like-count">{`${props.likes.length}`}</span>
        </div>
      </div>
    </div>
  )
}
