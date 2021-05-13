import React from 'react';
import Card from './Card';
import api from '../utils/Api';

export default function Main (props) {
  const [userName, setUserName] = React.useState('Fetching');
  const [userDescription, setUserDescription] = React.useState('Fetching');
  const [userAvatar, setUserAvatar] = React.useState('Fetching');
  const [cards, setCards] = React.useState([]);

  React.useEffect(()=>{
    api.getUserInfo()
      .then((res)=> {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      });
    }, [])

  React.useEffect(()=>{
    api.getInitialCards()
      .then((res) => {
        setCards(res);
        return res
      })
  }, [])


  return (
    <main>
    <section className="profile">
      <div className="profile__avatar-wrapper">
        <button type="button" className="profile__image-edit" onClick={props.onAvatarClick}>
        </button>
        <img src={`${userAvatar}`} className="profile__avatar" alt={`${userName}`} />
      </div>
      <div className="profile__profile-info">
        <h1 className="profile__name">
          {userName}
        </h1>
        <button className="profile__edit-button button-hover" type="button"
          aria-label="Edit Profile" onClick={props.onEditClick}>
        </button>
        <p className="profile__occupation">
          {userDescription}
        </p>
      </div>
      <button className="profile__add-button button-hover" type="button"
        aria-label="Add Picture" onClick={props.onAddClick}>
      </button>
    </section>

    <section className="elements card-container">

      {cards.map((card) =>
          {
            return (<Card key={card._id}  {...card} onCardClick={props.onCardClick}/>)
          })
      }

    </section>
  </main>
  )
}
