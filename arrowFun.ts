let employee = {
  firstName: 'Tom',
  lastName: 'Jerry',
  fullName: function () {
    setTimeout( () => {
      return `${this.firstName} ${this.fullName}`
    }, 100)
  },
}

console.log(employee.fullName)
