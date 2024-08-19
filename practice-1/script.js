const form = document.forms[0];

const inputList = document.querySelectorAll('input');

const modal = document.querySelector('.modal');

const submitButton = document.querySelector('.submit-button');

const resetButton = document.querySelector('.reset-button');

const logoInput = document.querySelector('.logo-input__input');

const buttonDeleteLogo = document.querySelector('.delete-image-button__icon');

const openModalButton = document.querySelector('.open-modal-button');

const closeModal = () => {
  modal.classList.add('hidden');
}

const checkForm = () => {
  if ([...inputList].every((item) => item.checkValidity())) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

const loadImage = (e) => {
  const files = e.target.files;
  if (files.length) {
    const image = files[0];
    let src = URL.createObjectURL(image);
    const previewImg = document.querySelector('.logo-input__preview-img');
    previewImg.src = src;
  }
}

const deleteLogo = (e) => {
  e.preventDefault();
  logoInput.nodeValue = null;
  const previewImg = document.querySelector('.logo-input__preview-img');
  previewImg.src = null;
}

const openModal = () => {
  modal.classList.remove('hidden');
}

form.addEventListener('change', checkForm);

submitButton.addEventListener('click', closeModal);

resetButton.addEventListener('click', closeModal);

logoInput.addEventListener('change', loadImage);

buttonDeleteLogo.addEventListener('click', deleteLogo);

openModalButton.addEventListener('click', openModal);
