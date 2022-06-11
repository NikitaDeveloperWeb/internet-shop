// forms
let formAuthElement = document.querySelector('#form-login');
let formSignUpElement = document.querySelector('#form-signUp');
// button
let formSwitchLoginBut = document.querySelector('#switch-login');
let formSwitchSignUpBut = document.querySelector('#switch-signUp');
// state
let formsState = false;

// fun for rerender forms
function renderForms() {
  if (formsState) {
    formAuthElement.style.display = 'none';
    formSignUpElement.style.display = '';
  } else {
    formAuthElement.style.display = '';
    formSignUpElement.style.display = 'none';
  }
}
// init form
renderForms();

// switch stete
function setStateLogin() {
  console.log('login');
  formsState = false;
  renderForms();
}
function setStateSignUp() {
  console.log('sign up');
  formsState = true;
  renderForms();
}

// event listener
formSwitchLoginBut.addEventListener('click', () => {
  setStateLogin();
});
formSwitchSignUpBut.addEventListener('click', () => {
  setStateSignUp();
});

// check politic
function check() {
  var submit = document.querySelector('#signUpbut');
  if (document.querySelector('#politics').checked) {
    submit.classList.remove('button-disabled');
    submit.disabled = '';
  } else {
    submit.classList.add('button-disabled');
    submit.disabled = 'disabled';
  }
}
