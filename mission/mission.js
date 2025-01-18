const themeSelector = document.getElementById('select');
const logo = document.querySelector('.logo');

function changeTheme() {
  const body = document.body;

  if (themeSelector.value === 'dark') {
    body.classList.add('dark');

    logo.src = 'images/byui-logo_white.png';
  } else {
    body.classList.remove('dark');

    logo.src = 'images/byui-logo_blue.webp';
  }
}

themeSelector.addEventListener('change', changeTheme);
