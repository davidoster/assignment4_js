var TShirt = require('./tshirt')
var BubbleSort = require('./bubblesort')
let noOfTShirts = 4
let tShirts = []

console.log("Unsorted Array")
for(let i = 0; i < noOfTShirts; i++) {
    tShirts.push(new TShirt(true))
    console.log(tShirts[i].toString())
}

var myBS = new BubbleSort();
var sortedBSTShirts = myBS.sort({data: tShirts, attribute: 'Size', type: 'ASC'}) // {data: tShirts, attribute: Size, type: ASC}
console.log("Sorted Array BS")
for(let i = 0; i < noOfTShirts; i++) {
    console.log(sortedBSTShirts[i].toString())
}

// console.log("----------------------------------------")
// console.log(tShirts[0], tShirts[1])
// console.log(sortedBSTShirts[0], sortedBSTShirts[1])