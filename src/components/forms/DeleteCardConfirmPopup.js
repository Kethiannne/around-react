import React from 'react';
import PopupWithForm from '../PopupWithForm';

export default function EditProfilePopup (props) {
  function handleSubmit(evt){
    evt.preventDefault()

    props.onSubmit();
  }

  return (
    <PopupWithForm
    // Props
    name='delete'
    title='Are You Sure'
    saveText='Yes'
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleSubmit}
  />
  )
}
