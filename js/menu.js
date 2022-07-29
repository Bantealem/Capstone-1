const menuIcon = document.querySelector('.menu');
const closeIcon = document.querySelector('.close');
const menuList = document.querySelector('.mobile-menu');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.add('hidden');
  closeIcon.style.display = 'inline';
  menuList.style.display = 'flex';
});

closeIcon.addEventListener('click', () => {
  menuIcon.classList.remove('hidden');
  closeIcon.style.display = 'none';
  menuList.style.display = 'none';
});
