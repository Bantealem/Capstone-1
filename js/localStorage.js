function storeFormData() {
  const formObject = JSON.parse(localStorage.getItem('formObject'));
  formObject.name = document.querySelector('#name').value;
  formObject.email = document.querySelector('#email').value;
  localStorage.setItem('formObject', JSON.stringify(formObject));
}

function checkLocalStorage() {
  if (!localStorage.getItem('formObject')) {
    const formObject = {
      name: '',
      email: '',
    };
    localStorage.setItem('formObject', JSON.stringify(formObject));
  } else {
    const formObject = JSON.parse(localStorage.getItem('formObject'));
    document.querySelector('#name').value = formObject.name;
    document.querySelector('#email').value = formObject.email;
  }
}

window.onload = () => {
  checkLocalStorage(); // check if local storage is empty and if it is, create an empty object
};

document.querySelector('#name').addEventListener('keydown', storeFormData);
document.querySelector('#email').addEventListener('keydown', storeFormData);
