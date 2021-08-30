class Person {
  name: string
  constructor(name: string) {
    this.name = name
    console.log(this.name)
  }
  fullName() {
    return 'maim'
  }
}

class Asian extends Person {
  name: string
  constructor(name: string) {
    super(name)
    this.name = name
  }
  fullName(x: string) {
    return `name from person from ${x}`
  }
}

const Indian = new Asian('I am an indian')
console.log(Indian.fullName('hello'))
const p = new Person('John')
const Employee = new Person('Starvy')

class Employees extends Person {
  name: string
  constructor(name: string) {
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
