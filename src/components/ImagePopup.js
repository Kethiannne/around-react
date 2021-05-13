export default function ImagePopup(props) {
  return (
    <div className="popup popup_image">
    <div className="popup__wrapper">
      <button className="popup__close-button button-hover" type="button" aria-label="Close">
      </button>
      <div>
        <img className="image-popup" src="#" alt="#" />
        <p className="image-caption">
        </p>
      </div>
    </div>
    </div>
  )
}
