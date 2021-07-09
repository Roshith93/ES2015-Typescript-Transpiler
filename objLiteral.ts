let firstName = 'Tom'
let lastName = 'Jerry'
// object initial shorthand property
let newEmployee = {
  firstName,
  lastName,
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  },
}

// consice method
let conciseEmployee = {
  firstNames: 'tom',
  lastName,
  fullName() {
    return this.firstNames + ' ' + this.lastName
  },
}

console.log(newEmployee.fullName())
console.log(conciseEmployee.fullName())
