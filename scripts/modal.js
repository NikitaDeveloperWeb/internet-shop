// modal el
let modalAuthForms = document.querySelector('#modalFormAuth');
let modalAuthFormsOpenIcon = document.querySelector('#icon-modal-open');
let modalAuthFormsCloseIcon = document.querySelector('#icon-modal-close');
let modalAuthFormsOverfloy = document.querySelector('#modal-overfloy');
// state modal
let stateModalAuthForms = false;

// render
function renderMdoalAuthForm() {
  if (stateModalAuthForms) {
    modalAuthForms.style.display = '';
  } else {
    modalAuthForms.style.display = 'none';
  }
}
renderMdoalAuthForm();
// fun for switch stet

function modalAuthFormOpen() {
  stateModalAuthForms = true;
  renderMdoalAuthForm();
}
function modalAuthFormClose() {
  stateModalAuthForms = false;
  renderMdoalAuthForm();
}
// event listener
modalAuthFormsOpenIcon.addEventListener('click', () => {
  modalAuthFormOpen();
});
modalAuthFormsCloseIcon.addEventListener('click', () => {
  modalAuthFormClose();
});
modalAuthFormsOverfloy.addEventListener('click', () => {
  modalAuthFormClose();
});
