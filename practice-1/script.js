const form = document.forms[0];

const inputList = document.querySelectorAll('input');

const modal = document.querySelector('.modal');

const submitButton = document.querySelector('.submit-button');

const resetButton = document.querySelector('.reset-button');

const closeModal = () => {
  modal.classList.add('hidden');
}

const checkForm = () => {
  if (inputList.every((item) => item.checkValidity())) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

form.addEventListener('change', checkForm);

submitButton.addEventListener('click', closeModal);

resetButton.addEventListener('click', closeModal);
