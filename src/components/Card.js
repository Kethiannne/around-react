import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.owner._id === currentUser._id;
  const isLiked = props.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (
    `button-hover elements__heart ${isLiked ? `elements__heart_active` : ``}`
  );

  const cardDeleteButtonClassName = (
    `button-hover elements__delete ${isOwn ? '' : 'elements__delete_hidden'}`
  );

  function handleClick() {
    props.onCardClick(props);
  }
  function handleLike() {
    props.onCardLike(props);
  }
  function handleDelete() {
    props.onDeleteClick(props._id)
  }

  return (
    <div className="elements__element">
      <div className="elements__image" style={{ backgroundImage: `url(${props.link})` }}
        onClick={(evt)=>{
          if (evt.target === evt.currentTarget){
            handleClick();
          }
        }}
      >
        <button className= {`${cardDeleteButtonClassName}`} onClick={handleDelete}
          aria-label="Delete" type="button">
        </button>
      </div>
      <div className="elements__wrapper">
        <h2 className="elements__title">
          {`${props.name}`}
        </h2>
        <div className="elements__like-wrapper">
          <button className={`${cardLikeButtonClassName}`} aria-label="Like"
            onClick={handleLike} type="button">
          </button>
          <span className="elements__like-count">{`${props.likes.length}`}</span>
        </div>
      </div>
    </div>
  )
}
