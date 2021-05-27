export default function PopupWithForm (props) {


  return (
    <div className= {`popup popup_${props.name} ${props.isOpen ? `popup_opened` : ``}`}
      onClick={(evt)=>{
        if (evt.target === evt.currentTarget){
          props.onClose()
        }
      }}
    >
      <div className={`popup__wrapper`} >
        <button className="popup__close-button button-hover" type="button"
          aria-label="Close" onClick={props.onClose}>
        </button>
        <form className="form" name={props.name} onSubmit={props.onSubmit} noValidate>
          <h2 className="form__title">
            {props.title}
          </h2>

          {props.children}

          <button type="submit" className="form__save-button button-hover">
            {props.saveText}
          </button>
        </form>
      </div>
    </div>
  )
}
