const openPopupButton = document.querySelector('.stock-info__button');
const closePopupButtons = document.querySelectorAll('.close-popup');
const popup = document.querySelector('.popup-background');
const body = document.querySelector('body');

const OPENED_POPUP_CLASS = 'popup-background--open';
const ESC_KEY_CODE = 'Escape';

const openPopup = () => {
  body.classList.add('popup-opened');
  popup.classList.add(OPENED_POPUP_CLASS);
}

const closePopup = () => {
  body.classList.remove('popup-opened');
  popup.classList.remove(OPENED_POPUP_CLASS);
};

openPopupButton.addEventListener('click', openPopup);

closePopupButtons.forEach((button) => {
  button.addEventListener('click', closePopup);
});

popup.addEventListener('click', (e) => {
  if (!e.target.closest('.popup')) {
    closePopup();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === ESC_KEY_CODE) {
    closePopup();
    openPopupButton.blur();
  }
});

export {closePopup};