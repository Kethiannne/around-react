import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup (props) {
  const [link, setLink] = React.useState();
  const [name, setName] = React.useState();

  function handleChange(evt){
    evt.target.type === "text" ? setName(evt.target.value) : setLink(evt.target.value);
  }


  function handleSubmit(evt){
    evt.preventDefault();
    props.onSubmit({link, name});
  }

  return (
    <PopupWithForm
    // Props
    name='add-form'
    title='New Place'
    saveText='Create'
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleSubmit}
    >
    {/* Children Elements */}
    <input type="text" onChange={handleChange} required className="form__field add-form__title"
      placeholder="Title" name="name" minLength={1} maxLength={30} />
    <input type="url" onChange={handleChange} required className="form__field add-form__image"
      placeholder="Image Link" name="link" />
  </PopupWithForm>
  )
}
