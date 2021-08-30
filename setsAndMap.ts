const seen = new Set();
const arr = [
  { id: 1, name: "test1" },
  { id: 2, name: "test2" },
  { id: 2, name: "test3" },
  { id: 3, name: "test4" },
  { id: 4, name: "test5" },
  { id: 5, name: "test6" },
  { id: 5, name: "test7" },
  { id: 6, name: "test8" }
];
let uniqueArr= arr.filter(el => {
 const duplicate = seen.has(el.id)
 seen.add(el.id)
 return !duplicate;
})

console.log(uniqueArr)