const menuButton = document.querySelector('.menu-button');
function toggleMenu() {
  const menu = document.querySelector('nav');
  menu.classList.toggle('hide');
}

menuButton.addEventListener('click', toggleMenu);

function handleResize() {
  const menu = document.querySelector('nav');
  if (window.innerWidth > 1000) {
    menu.classList.remove('hide');
  } else {
    menu.classList.add('hide');
  }
}

handleResize();
window.addEventListener('resize', handleResize);

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
}

function viewHandler(event) {
  const clickedElement = event.target;
  if (!clickedElement.classList.contains('small-img')) return;

  const imgSrc = clickedElement.src;
  const imgSrcPart = imgSrc.split('-');
  const newImgSrc = imgSrcPart[0] + '-full.jpeg';
  const viewerHtml = viewerTemplate(newImgSrc, clickedElement.alt);
  document.body.insertAdjacentHTML('afterbegin', viewerHtml);

  const closeButton = document.querySelector('.close-viewer');
  closeButton.addEventListener('click', closeViewer);
}

function closeViewer() {
  const viewer = document.querySelector('.viewer');
  if (viewer) {
    viewer.remove();
  }
}

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);
