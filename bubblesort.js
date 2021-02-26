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
                    if(obj.attribute == 'Color') {
                        if(toSortarr[j]._color > toSortarr[j+1]._color){
                            [toSortarr[j], toSortarr[j+1]] = [toSortarr[j+1], toSortarr[j]];
                        }
                    }
                    // Fabric
                    if(obj.attribute == 'Fabric') {
                        if(toSortarr[j]._fabric > toSortarr[j+1]._fabric){
                            [toSortarr[j], toSortarr[j+1]] = [toSortarr[j+1], toSortarr[j]];
                        }
                    }
                } else { // DESC
                    // Size
                    if(obj.attribute == 'Size') {
                        if(toSortarr[j]._size < toSortarr[j+1]._size){
                            [toSortarr[j], toSortarr[j+1]] = [toSortarr[j+1], toSortarr[j]];
                        }
                    }
                    // Color
                    if(obj.attribute == 'Color') {
                        if(toSortarr[j]._color < toSortarr[j+1]._color){
                            [toSortarr[j], toSortarr[j+1]] = [toSortarr[j+1], toSortarr[j]];
                        }
                    }
                    // Fabric
                    if(obj.attribute == 'Fabric') {
                        if(toSortarr[j]._fabric < toSortarr[j+1]._fabric){
                            [toSortarr[j], toSortarr[j+1]] = [toSortarr[j+1], toSortarr[j]];
                        }
                    }
                }
            }
        }
        return toSortarr;
    }
}

module.exports = BubbleSort 