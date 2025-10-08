const student = {
  surname: "Vanderpoorten",
  firstName: "Michael",
  gender: 1,
  birthDate: 705538800000,
  courses: [
    {
      name: "Programming 1",
      teachers: ["Michael", "Niels"],
    },
    {
      name: "Web 1",
      teachers: ["Dieter", "Mark"],
    },
    {
      name: "Data Management 1",
      teachers: ["Adriaan"],
    },
    {
      name: "Personal Skills",
      teachers: ["Isabelle"],
    },
  ],
};

function generateStringForLecturers(lecturers) {
  return lecturers.join(", ");
}

function generateStringForCourses(courses) {
  let text = "";
  for (const course of courses) {
    text += `
Course: ${course.name}
Lecturers: ${generateStringForLecturers(course.teachers)}
------------------------------------------------`;
  }
  return text;
}

function generateStringForGender(gender) {
  if (gender === 1) {
    return "Male";
  } else if (gender === 2) {
    return "Female";
  } else {
    return "Other";
  }
}

function generateStringForStudent(student) {
  return `
======================================================
|                STUDENT INFORMATION                 |
======================================================
PERSONAL
======================================================
Name: ${student.firstName} ${student.surname}
Gender: ${generateStringForGender(student.gender)}
Day of birth: ${new Date(student.birthDate)}
======================================================
COURSES
======================================================
${generateStringForCourses(student.courses)}
======================================================`;
}

// test output
console.log(generateStringForStudent(student));
