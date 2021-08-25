class Person {
  constructor(name: string) {
    this.name = name
    console.log(this.name)
  }
  fullName() {
    return 'maim'
  }
}
const p = new Person('John')
const Employee = new Person('Starvy')

class Employees extends Person {
  constructor(name) {
    super(name)
    this.name = name
    console.log(this.name)
  }
  fullName() {
    return super.fullName()
  }
}

let trainee = new Employees('Jobbys ')
console.log(trainee.fullName())
