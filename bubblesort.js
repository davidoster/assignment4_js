class BubbleSort {
    
    sort(obj /*arr*/) {
        //{data: tShirts, attribute: 'Size', type: 'ASC'}
        var toSortarr = [...obj.data]

        //Length of the array
        let n = toSortarr.length;
        
        for(let i = 0; i < n - 1; i++){
            for(let j = 0; j < n - i - 1; j++){
                //Swap the numbers
                // console.log(toSortarr[j], toSortarr[j+1])
                // ASC
                if(obj.type == 'ASC') {
                    // Size
                    if(obj.attribute == 'Size') {
                        if(toSortarr[j]._size > toSortarr[j+1]._size){
                            [toSortarr[j], toSortarr[j+1]] = [toSortarr[j+1], toSortarr[j]];
                        }
                    }
                    // Color
                    // Fabric
                } else { // DESC
                    // Size
                    if(obj.attribure == Size) {
                        if(toSortarr[j]._size < toSortarr[j+1]._size){
                            [toSortarr[j], toSortarr[j+1]] = [toSortarr[j+1], toSortarr[j]];
                        }
                    }
                    // Color
                    // Fabric
                }
                
                
            }
        }
        return toSortarr;
    }
}

module.exports = BubbleSort 