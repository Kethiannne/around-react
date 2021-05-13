export const settings = {
  inputSelector: ".form__field",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__save-button_disabled",
  inputErrorClass: "form__field_error",
  errorClass: "form__field-error_active"
};

// General Page Vars
  const page = document.querySelector(".page");
  const profile = page.querySelector(".profile");
  export const popupEdit = page.querySelector(".popup_edit-form");
  export const popupAdd = page.querySelector(".popup_add-form");
  export const popupAvatar = page.querySelector(".popup_avatar-form");
  export const popupDelete = page.querySelector(".popup_delete")
  // Edit form Vars
  export const edit = profile.querySelector(".profile__edit-button");
  export const myName = profile.querySelector(".profile__name");
  export const myOccupation = profile.querySelector(".profile__occupation");
  export const editForm = document.forms.edit;
  export const nameForm = editForm.elements.name;
  export const occupationForm = editForm.elements.about;
  export const save = popupEdit.querySelector(".form__save-button");
// Place Card and Add Form Vars
  export const add = profile.querySelector(".profile__add-button");
  export const create = popupAdd.querySelector(".form__save-button");
  export const addForm = document.forms.add;
// Avatar Form Vars
  export const avatar = profile.querySelector(".profile__image-edit");
  export const avatarImage = profile.querySelector(".profile__avatar")
  export const avatarForm = document.forms.avatar;
  export const avatarSave = popupAvatar.querySelector(".form__save-button");
// Element Card Template Vars
  export const cardContainer = document.querySelector(".card-container");
// Image Popup Vars
  export const popupImages = document.querySelector(".popup_image");
// Delete Form Vars
  export const deleteForm = document.forms.delete;
  export const deleteConfirm = popupDelete.querySelector(".form__save-button");
