import React from 'react'


export default function Main (props) {
  const [userName, setUserName] = React.useState;
  const [userDescription, setUserDescription] = React.useState;
  const [userAvatar, setUserAvatar] = React.useState;

  return (
    <main>
    <section className="profile">
      <div className="profile__avatar-wrapper">
        <button type="button" className="profile__image-edit" onClick={props.onAvatarClick}>
        </button>
        <img src="#" className="profile__avatar" alt="avatar" />
      </div>
      <div className="profile__profile-info">
        <h1 className="profile__name">
          Ike
        </h1>
        <button className="profile__edit-button button-hover" type="button"
          aria-label="Edit Profile" onClick={props.onEditClick}>
        </button>
        <p className="profile__occupation">
          Commander of the Greil Mercenaries
        </p>
      </div>
      <button className="profile__add-button button-hover" type="button"
        aria-label="Add Picture" onClick={props.onAddClick}>
      </button>
    </section>

    <section className="elements card-container">
    </section>
  </main>
  )
}
