var Timer = require('./timer')
var TShirt = require('./tshirt')
var BubbleSort = require('./bubblesort')
var QuickSort = require('./quicksort')
var BucketSort = require('./bucketsort')
let noOfTShirts = 1200
let tShirts = []

console.log("Unsorted Array")
for (let i = 0; i < noOfTShirts; i++) {
    tShirts.push(new TShirt(true))
    //console.log(tShirts[i].toString())
}

function printArrayOfTShirts(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].toString())
    }
}

// we need to time every single one, how long it takes
function doBubbleSort() {
    var myBS = new BubbleSort();
    var BSSizeASCTimer = new Timer()
    var sortedBSTShirts_Size_ASC = myBS.sort({ data: tShirts, attribute: 'Size', type: 'ASC' }) // {data: tShirts, attribute: Size, type: ASC}
    BSSizeASCTimer.stop()
    console.log("Sorted Array BS Size ASC")
    console.log("Elapsed Time: " + BSSizeASCTimer.elapsedTime())
    printArrayOfTShirts(sortedBSTShirts_Size_ASC)

    var sortedBSTShirts_Size_DESC = myBS.sort({ data: tShirts, attribute: 'Size', type: 'DESC' }) // {data: tShirts, attribute: Size, type: ASC}
    console.log("Sorted Array BS Size DESC")
    printArrayOfTShirts(sortedBSTShirts_Size_DESC)

    var sortedBSTShirts_Color_ASC = myBS.sort({ data: tShirts, attribute: 'Color', type: 'ASC' }) // {data: tShirts, attribute: Size, type: ASC}
    console.log("Sorted Array BS Color ASC")
    printArrayOfTShirts(sortedBSTShirts_Color_ASC)

    var sortedBSTShirts_Color_DESC = myBS.sort({ data: tShirts, attribute: 'Color', type: 'DESC' }) // {data: tShirts, attribute: Size, type: ASC}
    console.log("Sorted Array BS Color DESC")
    printArrayOfTShirts(sortedBSTShirts_Color_DESC)

    var sortedBSTShirts_Fabric_ASC = myBS.sort({ data: tShirts, attribute: 'Fabric', type: 'ASC' }) // {data: tShirts, attribute: Size, type: ASC}
    console.log("Sorted Array BS Fabric ASC")
    printArrayOfTShirts(sortedBSTShirts_Fabric_ASC)

    var sortedBSTShirts_Fabric_DESC = myBS.sort({ data: tShirts, attribute: 'Fabric', type: 'DESC' }) // {data: tShirts, attribute: Size, type: ASC}
    console.log("Sorted Array BS Fabric DESC")
    printArrayOfTShirts(sortedBSTShirts_Fabric_DESC)
}
// doBubbleSort()

// we need to time every single one, how long it takes
function doQuickSort() {
    var myQS = new QuickSort()

    // Size ASC
    var QSSizeASCTimer = new Timer() 
    var sortedQSTShirts_Size_ASC = myQS.quicksort(tShirts, 0, tShirts.length - 1, 'Size', 'ASC')
    QSSizeASCTimer.stop()
    console.log("Sorted Array QS Size ASC")
    console.log("Elapsed Time: " + QSSizeASCTimer.elapsedTime())
    printArrayOfTShirts(sortedQSTShirts_Size_ASC)

    // Size DESC
    var sortedQSTShirts_Size_DESC = myQS.quicksort(tShirts, 0, tShirts.length - 1, 'Size', 'DESC')
    sortedQSTShirts_Size_DESC.reverse()
    console.log("Sorted Array QS Size DESC")
    printArrayOfTShirts(sortedQSTShirts_Size_DESC)

    // Color ASC
    var sortedQSTShirts_Color_ASC = myQS.quicksort(tShirts, 0, tShirts.length - 1, 'Color', 'ASC')
    console.log("Sorted Array QS Color ASC")
    printArrayOfTShirts(sortedQSTShirts_Color_ASC)

    // Color DESC
    var sortedQSTShirts_Color_DESC = myQS.quicksort(tShirts, 0, tShirts.length - 1, 'Color', 'DESC')
    sortedQSTShirts_Color_DESC.reverse()
    console.log("Sorted Array QS Color DESC")
    printArrayOfTShirts(sortedQSTShirts_Color_DESC)

    // Fabric ASC
    var sortedQSTShirts_Fabric_ASC = myQS.quicksort(tShirts, 0, tShirts.length - 1, 'Fabric', 'ASC')
    console.log("Sorted Array QS Fabric ASC")
    printArrayOfTShirts(sortedQSTShirts_Fabric_ASC)

    // Fabric DESC
    var sortedQSTShirts_Fabric_DESC = myQS.quicksort(tShirts, 0, tShirts.length - 1, 'Fabric', 'DESC')
    sortedQSTShirts_Fabric_DESC.reverse()
    console.log("Sorted Array QS Fabric DESC")
    printArrayOfTShirts(sortedQSTShirts_Fabric_DESC)
}
//doQuickSort()

// we need to time every single one, how long it takes
function doBucketSort() {
 var myBus = new BucketSort()
 var elements = [1,4,5,3,6,5,2,3,1,6,7,7,3,3,2,4,4,6]
 var sortedByBus = [...tShirts]
 myBus.bucketSort(sortedByBus, 7)
 sortedByBus.forEach(item => console.log(item))
}
doBucketSort()