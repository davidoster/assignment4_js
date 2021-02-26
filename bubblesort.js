class BubbleSort {
    
    sort(arr) {
        var toSortarr = [...arr]

        //Length of the array
        let n = arr.length;
        
        for(let i = 0; i < n - 1; i++){
            for(let j = 0; j < n - i - 1; j++){
                //Swap the numbers
                // console.log(toSortarr[j], toSortarr[j+1])
                if(toSortarr[j]._size > toSortarr[j+1]._size){
                    [toSortarr[j], toSortarr[j+1]] = [toSortarr[j+1], toSortarr[j]];
                }
            }
        }
        return toSortarr;
    }
}

module.exports = BubbleSort 