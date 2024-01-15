import './popup.js';
import './view.js';
import './data.js';
import { store, updateStore, sortByDate } from './data.js';
import { renderTable } from './view.js';
import { closePopup } from './popup.js';
import { validateForm } from './validator.js';

const body = document.querySelector('body');
body.style.height = window.innerHeight + 'px';

const form = document.querySelector('.form');
const priceInput = form.querySelector('input[name="price"]');
const dateInput = form.querySelector('input[name="date"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateForm(dateInput, priceInput)) {
    const formData = new FormData(e.target);
    const formDataAsObject = Object.fromEntries(formData.entries());
  
    updateStore(formDataAsObject);
    sortByDate(store);
    renderTable(store);
  
    closePopup();
    e.target.reset();
  } else {
    return;
  }
});
