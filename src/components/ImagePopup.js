export default function ImagePopup(props) {
  return (
    <div className={`popup popup_image ${(props.card.name !== undefined) ? `popup_opened` : ``}`}
    onClick={(evt)=>{
      if (evt.target === evt.currentTarget){
        props.onClose()
      }
    }}
    >
    <div className="popup__wrapper">
      <button className="popup__close-button button-hover" type="button" aria-label="Close"
      onClick={props.onClose}>
      </button>
      <div>
        <img className="image-popup" src={`${props.card.link}`} alt={`${props.card.name}`} />
        <p className="image-caption">
          {`${props.card.name}`}
        </p>
      </div>
    </div>
    </div>
  )
}
