const joinConf = document.getElementById('join');
const joinBtn = document.getElementById('join-btn');
const closeX = document.querySelector('.close-modal');

function showModal() {
  const modal = document.querySelector('.modal-form');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.querySelector('.modal-form');
  modal.style.display = 'none';
}

joinConf.addEventListener('click', showModal);
closeX.addEventListener('click', closeModal);
joinBtn.addEventListener('click', showModal);
