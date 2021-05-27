import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function EditProfilePopup (props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChange(evt){
    evt.target.name === "name" ? setName(evt.target.value) : setDescription(evt.target.value);
  }

  function handleSubmit(evt){
    evt.preventDefault();

    props.onSubmit({
      name,
      about: description
    })
  }

  return (
    <PopupWithForm
    // Props
    name='edit-form'
    title='Edit profile'
    saveText='Save'
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleSubmit}
    >
    {/* Children Elements */}
    <input name="name" value={name} onChange={handleChange} type="text" required className="form__field edit-form__name"
      placeholder="Name" minLength={2} maxLength={40} />

    <input name="about" value={description} onChange={handleChange} type="text" required className="form__field edit-form__occupation"
      placeholder="Occupation" minLength={2} maxLength={200} />
    </PopupWithForm>
  )
}
