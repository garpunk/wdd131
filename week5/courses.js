// courses.js
const aCourse = {
  code: 'CSE121b',
  name: 'Javascript Language',
  credits: 3,
  sections: [
    {
      sectionNum: 1,
      roomNum: 'STC 353',
      enrolled: 26,
      days: 'TTh',
      instructor: 'Bro T',
    },
    {
      sectionNum: 2,
      roomNum: 'STC 347',
      enrolled: 25,
      days: 'TTh',
      instructor: 'Sis A',
    },
  ],
};

const section1 = aCourse.sections.find;

function setCourseInfo() {
  const courseName = document.querySelector('#courseName');
  const courseCode = document.querySelector('courseName');

  courseName.textContent = aCourse.name;
  courseCode.textContent = aCourse.code;
}

function sectionTemplate(section) {
  return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
    `;
}

function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector('#sections').innerHTML = html.join('');
}

setCourseInfo(aCourse);
renderSections(aCourse.sections);
