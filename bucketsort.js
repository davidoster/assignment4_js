var Fabric = require('./fabric')

class BucketSort {
    bucketSort(arr, n = 7, attribute, type) {
        //Create a bucket array
        let bucket = new Array(arr.length);

        //Add bucket group
        for (let i = 0; i <= n; i++) {
            bucket[i] = [];
        }

        //Add the elements in a same range in bucket
        for (let i = 0; i < arr.length; i++) {
            //let bucketIndex = n //Math.floor(arr[i]) * n;
            if (attribute == 'Size') bucket[arr[i]._size].push(arr[i]);
            if (attribute == 'Color') bucket[arr[i]._color].push(arr[i]);
            if (attribute == 'Fabric') bucket[Object.values(new Fabric().fabrics).indexOf(arr[i]._fabric)].push(arr[i]);
        }

        // //Sort each bucket separately
        // for (let i = 0; i < n; i++) {
        //     bucket[i].sort();
        // }

        // Get the sorted array
        let index = 0;
        for (let i = 0; i <= n; i++) {
            for (let j = 0, size = bucket[i].length; j < size; j++) {
                arr[index++] = bucket[i][j];
            }
        }
        if(type !== 'ASC') arr.reverse()
    }
}

module.exports = BucketSort