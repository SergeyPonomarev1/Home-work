/* passport.js */
export default class Passport {
    /**
     * @param {string} firstName
     * @param {string} lastName
     */
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    //
    getFirstName() {
      return this.firstName.toLowerCase();
    }
    getLastName() {
      return this.lastName.toUpperCase();
    }
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    getInitials() {
      return `${this.firstName[0]}.${this.lastName[0]}.`.toUpperCase();
    }
    getIsValidName() {
      const regAnyLetter = /[A-я]/;
      console.log(this.firstName.search(regAnyLetter) >= 0);
      console.log(this.lastName.search(regAnyLetter) >= 0);
      return this.firstName.search(regAnyLetter) >= 0 &&
        this.lastName.search(regAnyLetter) >= 0 &&
        !this.lastName.endsWith(".")
        ? "Yes"
        : "No";
    }
  }
  // Имя и фамилия должны СОДЕРЖАТЬ хотя бы одну букву,

//   `getFirstName`, возвращает имя в нижнем регистре
// - `getLastName`, возвращает фамилию в верхнем регистре
// - `getFullName`, возвращает имя и фамилию, разделенные пробелом
// - `getInitials`, возвращает первый символ имени в верхнем регистре, за которым следует символ точки, далее первый символ фамилии в верхнем регистре и символ точки
// - `getIsValidName`, возвращает `"Yes"`, если имя содержит хотя бы одну букву и фамилия содержит хотя бы одну букву. Также фамилия не должна заканчиваться точкой. Во всех остальных случаях возвращает `"No"`.