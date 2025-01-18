const newP = document.createElement('p');

newP.textContent = 'Hello, World!';

document.body.append(newP);

const newImg = document.createElement('img');

newImg.src = 'images/tacoclicker2.png';
newImg.alt = 'cartoon taco with smiley face';
document.body.prepend(newImg);

const newSection = document.createElement('section');

newSection.innerHTML = `
<h2>DOM Basics</h2>
<p>This was added through Javascript</p>`;

document.body.append(newSection);

/*const newSection2 = document.createElement('section');

newSection2.innerHTML = `
<h2>${title}</h2>
<h3>${subtitle}</h3>
<p>${content}</p>`; 

document.body.append(newSection2);*/

const ingredientData = ['Pinto Beans', 'Corn', 'Spices', 'Tortillas'];

const portionData = ['1 15oz can', '1 15oz can', '1 Tbsp', '8'];

function ingredientTemplate(index) {
  return `<li>${portionData[index]} ${ingredientData[index]}</li>`;
}

const newList = document.createElement('ul');
newList.classList.add('dark');
ingredientData.forEach(function (item, index) {
  newList.innerHTML += ingredientTemplate(index);
});

document.body.append(newList);
