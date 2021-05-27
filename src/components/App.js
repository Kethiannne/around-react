import React from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext'
import EditProfilePopup from './forms/EditProfilePopup';
import EditAvatarPopup from './forms/EditAvatarPopup';
import AddPlacePopup from './forms/AddPlacePopup';
import DeleteCardConfirmPopup from './forms/DeleteCardConfirmPopup';


function App() {
  // A Section For States
  //-----------------------------------------------------------------
  const [isEditOpen, setIsEditOpen] = React.useState(false);
  const [isAddOpen, setIsAddOpen] = React.useState(false);
  const [isAvaterOpen, setIsAvatarOpen] = React.useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({})
  const [cards, setCards] = React.useState([]);
  const [forDeletion, setForDeletion] = React.useState();
  //-----------------------------------------------------------------

  // A Section for Opening and Closing Popups
  //-----------------------------------------------------------------
  function handleAvatarOpen() {
    setIsAvatarOpen(true);
  }
  function handleEditOpen() {
    setIsEditOpen(true);
  }
  function handleAddOpen() {
    setIsAddOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function handleDeleteClick(id){
    setIsDeleteOpen(true);
    setForDeletion(id);
  }
  function closeAllPopups(){
    setIsAddOpen(false);
    setIsEditOpen(false);
    setIsAvatarOpen(false);
    setIsDeleteOpen(false);
    setSelectedCard({});
  }
  //-----------------------------------------------------------------

  // A Section for Submit Handlers
  //-----------------------------------------------------------------
  function handleUpdateUser(values){
    api.updateUserInfo(values)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopups();
      })
      .catch(err => {
        console.log((`User update not received properly: ${err}`));
      })
  }

  function handleUpdateAvatar(url){
    api.updateAvatar(url)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopups();
      })
      .catch(err => {
        console.log((`Avatar not received properly: ${err}`));
      })
  }

  function handleAddPlaceSubmit({link, name}){
    api.addCard({link, name})
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
  }
  //-----------------------------------------------------------------

  // A Section for Other API Calls
  //-----------------------------------------------------------------

  // A Call for Initial User Info
  React.useEffect(()=>{
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(err => {
        console.log((`User info not received properly: ${err}`));
      })
  }, [])

  // A Call for Initial Cards
  React.useEffect(()=>{
    api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch(err => {
        console.log((`Cards could not be delivered as dialed: ${err}`))
      })
  }, [])

  // A Set of Calls for Handling Likes
  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    function afterBoolean(newCard) {
      setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
    }

    function handleFalse(id) {
      api.updateLikeTrue(id)
        .then((newCard) => {afterBoolean(newCard)})
        .catch(err => {
          console.log((`Like Functions Broken: ${err}`))
        })
    }

    function handleTrue(id) {
      api.updateLikeFalse(id)
        .then((newCard) => {afterBoolean(newCard)})
        .catch(err => {
          console.log((`Like Functions Broken: ${err}`))
        })
    }

    isLiked ? handleTrue(card._id): handleFalse(card._id);
  }

  // A Call for Deleting a Card
  function handleCardDelete(){
    api.deleteCard(forDeletion)
      .then(() => {
        console.log('i did it!');
        setCards((cards) => cards.filter(card => card._id !== forDeletion))
        closeAllPopups();
      })
      .catch(err => {
        console.log((`Card Refuses to Leave Peacefully: ${err}`))
      })
  }


  //-----------------------------------------------------------------

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__wrapper">
        <Header/>
        <Main
          onAvatarClick={handleAvatarOpen}
          onAddClick={handleAddOpen}
          onEditClick={handleEditOpen}
          onCardClick={handleCardClick}
          onDeleteClick={handleDeleteClick}
          cards={cards}
          onCardLike={handleCardLike}
        >
        </Main>
        <Footer/>
        <ImagePopup onClose={closeAllPopups} card={selectedCard}/>
        <AddPlacePopup isOpen={isAddOpen} onClose={closeAllPopups} onSubmit={handleAddPlaceSubmit}/>
        <EditAvatarPopup isOpen={isAvaterOpen} onClose={closeAllPopups} onSubmit={handleUpdateAvatar}/>
        <EditProfilePopup isOpen={isEditOpen} onClose={closeAllPopups} onSubmit={handleUpdateUser}/>
        <DeleteCardConfirmPopup isOpen={isDeleteOpen} onClose={closeAllPopups} onSubmit={handleCardDelete}/>
      </div>
    </CurrentUserContext.Provider>
  );
}



export default App;
