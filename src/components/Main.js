import React from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function Main (props) {

  const currentUser = React.useContext(CurrentUserContext);


  return (
    <main>
    <section className="profile">
      <div className="profile__avatar-wrapper">
        <button type="button" className="profile__image-edit" onClick={props.onAvatarClick}>
        </button>
        <img src={`${currentUser.avatar}`} className="profile__avatar" alt={`${currentUser.name}`} />
      </div>
      <div className="profile__profile-info">
        <h1 className="profile__name">
          {currentUser.name}
        </h1>
        <button className="profile__edit-button button-hover" type="button"
          aria-label="Edit Profile" onClick={props.onEditClick}>
        </button>
        <p className="profile__occupation">
          {currentUser.about}
        </p>
      </div>
      <button className="profile__add-button button-hover" type="button"
        aria-label="Add Picture" onClick={props.onAddClick}>
      </button>
    </section>

    <section className="elements card-container">

      {props.cards.map((card) =>
          {
            return (<Card
                      key={card._id}
                      {...card}
                      onCardClick={props.onCardClick}
                      onCardLike={props.onCardLike}
                      onDeleteClick={props.onDeleteClick}
                    />)
          })
      }

    </section>
  </main>
  )
}
