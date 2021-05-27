import React from 'react';
import PopupWithForm from '../PopupWithForm';

export default function EditAvatarPopup (props) {
  const avatarRef = React.useRef()

  function handleSubmit(evt){
    evt.preventDefault();
    props.onSubmit({avatar: avatarRef.current.value});
  }

  return (
    <PopupWithForm
    // Props
    name='avatar-form'
    title='Change Profile Picture'
    saveText='Save'
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleSubmit}
  >
    {/* Children Elements */}
    <input type="url" ref={avatarRef} required className="form__field avatar-form__image" placeholder="Image Link" name="avatar" />
  </PopupWithForm>
  )
}
