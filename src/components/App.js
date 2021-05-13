import React from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  function handleAvatarOpen (){
    setIsAvatarOpen(true);
  }
  function handleEditOpen (){
    setIsEditOpen(true);
  }
  function handleAddOpen (){
    setIsAddOpen(true);
  }
  function handleDeleteClick(){
    document.querySelector('.popup_delete').classList.add('popup_opened');
  }

  function closeAllPopups(){
    setIsAddOpen(false);
    setIsEditOpen(false);
    setIsAvatarOpen(false);
  }

  const [isEditOpen, setIsEditOpen] = React.useState(false);
  const [isAddOpen, setIsAddOpen] = React.useState(false);
  const [isAvaterOpen, setIsAvatarOpen] = React.useState(false);


  return (
    <>
    <div className="page__wrapper">
      <Header></Header>
      <Main
        onAvatarClick={handleAvatarOpen}
        onAddClick={handleAddOpen}
        onEditClick={handleEditOpen}
      >
      </Main>
      <Footer></Footer>

    {/* Edit Form */}
      <PopupWithForm
        // Props
        name='edit-form'
        title='Edit profile'
        saveText='Save'
        isOpen={isEditOpen}
        onClose={closeAllPopups}
      >
        {/* Children Elements */}
        <input type="text" required className="form__field edit-form__name" placeholder="Name" name="name" minLength={2} maxLength={40} />
        <input type="text" required className="form__field edit-form__occupation" placeholder="Occupation" name="about" minLength={2} maxLength={200} />
      </PopupWithForm>

    {/* Add Form */}
      <PopupWithForm
        // Props
        name='add-form'
        title='New Place'
        saveText='Create'
        isOpen={isAddOpen}
        onClose={closeAllPopups}
        >
        {/* Children Elements */}
        <input type="text" required className="form__field add-form__title" placeholder="Title" name="name" minLength={1} maxLength={30} />
        <input type="url" required className="form__field add-form__image" placeholder="Image Link" name="link" />
      </PopupWithForm>

    {/* Avatar Form */}
      <PopupWithForm
        // Props
        name='avatar-form'
        title='Change Profile Picture'
        saveText='Save'
        isOpen={isAvaterOpen}
        onClose={closeAllPopups}
      >
        {/* Children Elements */}
        <input type="url" required className="form__field avatar-form__image" placeholder="Image Link" name="avatar" />
      </PopupWithForm>

    {/* Delete Form */}
      <PopupWithForm
        // Props
        name='delete'
        title='Are You Sure'
        saveText='Yes'
        onClose={closeAllPopups}
      >
        </PopupWithForm>
    </div>

    <template className="owner-template">
      <div className="elements__element">
        <div className="elements__image">
          <button className="elements__delete button-hover" aria-label="Delete" type="button">
          </button>
        </div>
        <div className="elements__wrapper">
          <h2 className="elements__title" />
          <div className="elements__like-wrapper">
            <button className="elements__heart button-hover" aria-label="Like" type="button">
            </button>
            <span className="elements__like-count">0</span>
          </div>
        </div>
      </div>
    </template>

    </>
  );
}

export default App;
