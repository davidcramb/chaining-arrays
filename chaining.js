var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
// document.write(integers.sort(function(first, second){return first-second}).reverse().filter(function(bob){return bob < 19}).map(function(mathing){return mathing*1.5 - 1}).reduce(function(ricky, bobby){return ricky+bobby})); my solution, one line because i'm dumb
var chain = integers
.sort(function(a,b){return a-b}) 
.reverse()//sorts numbers in descending order
.filter(function(num){return num < 19}) //remove integers greater than 19
.map(function(num){return (num * 1.5) - 1 }) // multiplies all numbers by 1.5 and subtracts 1
.reduce(function(previous, current) { return previous + current}); // adds all numbers together
console.log("result", chain);