for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000)
}
//  this print 5, for 5 times

for (let i = 0; i < 5; i++) {
 setTimeout(() => {
   console.log(i)
 }, 1000)
}
//  this print 0,1,2,3,4,