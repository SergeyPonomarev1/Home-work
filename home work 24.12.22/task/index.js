//task. Возраст пользователя
/*const user1 = {
  firstName: "Sam",
  lastName: "Doe",
  age: 20
};

const user2 = {
  firstName: "Charlie",
  lastName: "Fort",
  age: 31
};

/**
 * @param {Object[]} user
 * @param {string} user[].firstName
 * @param {string} user[].lastName
 * @param {number} user[].age
 */
/*function getIntials(user) {
    return user?.firstName[0] + user?.lastName[0];
}


// Sample usage - do not modify
getIntials(user1); // "SD"
getIntials(user2); // "CF"


//task. Добавление чисел
const course1 = {
  name: "Learn English",
  isCompleted: true
};

const course2 = {
  name: "Learn JavaScript",
  isCompleted: false
};

/**
 * @param {Object[]} course
 * @param {number} count
 */
/*function addNumberOfChapters(course, count) {
    course.numberOfChapters = count;
  return course;
  }
  
  
  // Sample usage - do not modify
  addNumberOfChapters(course1, 80); // { name: 'Learn English', isCompleted: true, numberOfChapters: 80 }
  addNumberOfChapters(course2, 60); // { name: 'Learn JavaScript', isCompleted: false, numberOfChapters: 60 }


  //task. Сумма оценок
  const student = {
  name: "Sam Doe",
  age: 24,
  grades: [13, 15, 15, 14, 18]
};

/**
 * @param {Object} student
 * @param {string} student.name
 * @param {number} student.age
 * @param {number[]} student.grades
 */
/*function getSumOfGrades(student) {
    return student?.grades.reduce((total, grade) => total + grade);
}


// Sample usage - do not modify
getSumOfGrades(student); // 75

//task. Имя пользователя
const users = [
	{
	  firstName: "Sam",
	  lastName: "Blue",
	  age: 21,
	},
  {
    firstName: "Charlie",
    lastName: "Bon",
    age: 38,
  }
];

/**
 * @param {{firstName: String, lastName: String, age: Number}[]} users
 */
/*function getLastUserFullName(users) {
	with (users.at(-1)) {
    return `${firstName} ${lastName}`;
}


// Sample usage - do not modify
getLastUserFullName(users); // "Charlie Bon"


//task. Первая оценка студента
const students = [
  {
    name: "Sam Doe",
    age: 24,
    learnEnglish: {
      startYear: 2020,
      grade: 18
    }
  },
  {
    name: "Charlie Bron",
    age: 31,
    learnEnglish: {
      startYear: 2021,
      grade: 19
    }
  }
];

/**
 * @typedef {{startYear: Number, grade: Number}} Course
 * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
 *
 * @param {Student[]} students
 */
/*function getFirstStudentGrade(students) {
	return students[0].learnEnglish.grade;
}


// Sample usage - do not modify
getFirstStudentGrade(students); // 18


//task. Сумма вложенных оценок
const students = [
  {
    name: "Sam Doe",
    age: 24,
    learnEnglish: {
      startYear: 2020,
      grade: 18
    }
  },
  {
    name: "Charlie Bron",
    age: 31,
    learnEnglish: {
      startYear: 2021,
      grade: 19
    }
  }
];

/**
 * @typedef {{startYear: Number, grade: Number}} Course
 * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
 *
 * @param {Student[]} students
 */
/*function getSumGrades(students) {
	return students.reduce(
    (total, student) => total + student.learnEnglish.grade,
    0
  );
}


// Sample usage - do not modify
getSumGrades(students); // 37

//task. Имена пользователей
const users = [
  {
    firstName: "Sam",
    lastName: "Blue",
    age: 21,
  },
  {
    firstName: "Charlie",
    lastName: "Bon",
    age: 38,
  }
];

/**
 * @param {{firstName: String, lastName: String, age: Number}[]} users
 */
/*function getFullNames(users) {
	return users.map((user) => `${user.firstName} ${user.lastName}`);
}


// Sample usage - do not modify
getFullNames(users); // [Sam Blue, Charlie Bon]*/