var TShirt = require('./tshirt')
var BubbleSort = require('./bubblesort')
let noOfTShirts = 4
let tShirts = []

function printArrayOfTShirts(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].toString())
    }
}

function doBubbleSort() {
    var myBS = new BubbleSort();
    var sortedBSTShirts_Size_ASC = myBS.sort({ data: tShirts, attribute: 'Size', type: 'ASC' }) // {data: tShirts, attribute: Size, type: ASC}
    console.log("Sorted Array BS Size ASC")
    printArrayOfTShirts(sortedBSTShirts_Size_ASC)

    var sortedBSTShirts_Size_DESC = myBS.sort({ data: tShirts, attribute: 'Size', type: 'DESC' }) // {data: tShirts, attribute: Size, type: ASC}
    console.log("Sorted Array BS Size DESC")
    printArrayOfTShirts(sortedBSTShirts_Size_DESC)

    var sortedBSTShirts_Color_ASC = myBS.sort({data: tShirts, attribute: 'Color', type: 'ASC'}) // {data: tShirts, attribute: Size, type: ASC}
    console.log("Sorted Array BS Color ASC")
    printArrayOfTShirts(sortedBSTShirts_Color_ASC)

    var sortedBSTShirts_Color_DESC = myBS.sort({data: tShirts, attribute: 'Color', type: 'DESC'}) // {data: tShirts, attribute: Size, type: ASC}
    console.log("Sorted Array BS Color DESC")
    printArrayOfTShirts(sortedBSTShirts_Color_DESC)

    var sortedBSTShirts_Fabric_ASC = myBS.sort({ data: tShirts, attribute: 'Fabric', type: 'ASC' }) // {data: tShirts, attribute: Size, type: ASC}
    console.log("Sorted Array BS Fabric ASC")
    printArrayOfTShirts(sortedBSTShirts_Fabric_ASC)

    var sortedBSTShirts_Fabric_DESC = myBS.sort({ data: tShirts, attribute: 'Fabric', type: 'DESC' }) // {data: tShirts, attribute: Size, type: ASC}
    console.log("Sorted Array BS Fabric DESC")
    printArrayOfTShirts(sortedBSTShirts_Fabric_DESC)
}

console.log("Unsorted Array")
for (let i = 0; i < noOfTShirts; i++) {
    tShirts.push(new TShirt(true))
    console.log(tShirts[i].toString())
}

doBubbleSort()


// console.log("----------------------------------------")
// console.log(tShirts[0], tShirts[1])
// console.log(sortedBSTShirts[0], sortedBSTShirts[1])