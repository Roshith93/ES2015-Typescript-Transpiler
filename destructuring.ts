let initialValues = [0, false, 'ABC']
const [count, isOpen, value = 'Cat'] = initialValues
console.log(count, isOpen, value)

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function removeFirstTwo(list: any) {
  // Only change code below this line
  const [a, c, ...arr1] = list // Change this line
  // Only change code above this line
  console.log(arr1)
  return arr1
}
const arr1 = removeFirstTwo(source)
console.log(arr1)

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
}

// Only change code below this line

const half = ({ stats: { max, min } }) => {
  // const { max, min } = stats
  console.log((max + min) / 2.0)
}

// half(stats)

const result = {
  success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
  failure: ['no-var', 'var-on-top', 'linebreak'],
  skipped: ['no-extra-semi', 'no-dup-keys'],
}
function makeList(arr) {
  // Only change code below this linelu => ele
  const listArr = arr.map((el) => {
    return `<li class="text-warning">${el}</li>,`
  })
  console.log(listArr)
  const failureItems = [...listArr]
  // Only change code above this line

  return failureItems
}

const failuresList = makeList(result.failure)
console.log(failuresList)
