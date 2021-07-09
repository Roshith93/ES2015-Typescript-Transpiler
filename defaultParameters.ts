const calcSum = function (a: number = 10, b: number = 20 * a) {
  console.log(a + b)
  console.log(arguments.length)
}

calcSum()
calcSum(12)
calcSum(10, 20)
