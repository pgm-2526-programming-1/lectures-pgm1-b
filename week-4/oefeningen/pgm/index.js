const $students = document.getElementById("students");

const students = [
  {
    firstName: "Maxim",
    surName: "Roosebrouck",
    email: "maxim@roosebrouck.be",
    image: "jommeke.png",
  },
  {
    firstName: "Naseem",
    surName: "Kandrouchi",
    email: "naseem@test.be",
    image: "muhammad_ali.jpg",
  },
  {
    firstName: "Jean-Pascal",
    surName: "Mulambu Mulenga",
    email: "jp@mm.be",
    image: "dwayne.webp",
  },
];

function convertStudentToHTMLString(student) {
  return `
  <li>
    <h2>${student.firstName} ${student.surName}</h2>
    <a href="mailto:${student.email}">${student.email}</a>
    <img src="images/${student.image}" alt="${student.firstName} ${student.surName}" />
  </li>
  `;
}

let html = "";

// oplossing met functie
for (const student of students) {
  html += convertStudentToHTMLString(student);
}

$students.innerHTML = html;
