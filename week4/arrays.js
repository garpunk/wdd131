//  arrays.js
const steps = ['one', 'two', 'three'];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector('#myList').innerHTML = stepsHtml.join(''); // set the innerHTML

// example 2
const grades = ['A', 'B', 'A'];

function gradesToGpa(grade) {
  let gpa = 0;
  if (grade === 'A') {
    gpa = 4;
  } else if (grade === 'B') {
    gpa = 3;
  }

  return gpa;
}
const getGpa = grades.map(gradesToGpa);

function sum(total, item) {
  return total + item;
}
const gpaTotal = getGpa.reduce(sum, 0);
console.log(gpaTotal);

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = words.filter(function (word) {
  return word.length < 6;
});

console.log(shortWords);
