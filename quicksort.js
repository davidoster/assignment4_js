class QuickSort {
    swap(arr, left, right) {
        const temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp;
    }

    partitionMiddle(arr, low, high) {
        //Get the mid index
        const mid = Math.floor((low + high) / 2);
        //Swap the mid element with first element
        this.swap(arr, mid, low);
        
        //Now use the first element as pivot
        let pivot = arr[low];
        let lo = low + 1;
        let hi = high;
        
        //Partition the array based on the pivot
        while(lo <= hi){
          //Move towards each other
          while(arr[hi] > pivot){
            hi = hi - 1
          }
          
          while(lo <= hi && arr[lo] <= pivot){
            lo = lo + 1;
          }
          
          //When inversion found swap the elements
          if(lo <= hi){
            this.swap(arr, lo, hi);
            lo = lo + 1;
            hi = hi - 1;
          }
        }
        
        this.swap(arr, low, hi);
        
        //Return the pivot index
        return hi;
      }
      
      quicksort(arr, low, high) {
          // base condition
          if (low >= high) {
            return;
          }
      
          // rearrange the elements across pivot
          const pivot = this.partitionMiddle(arr, low, high);
      
          // recur on sub-array containing elements less than pivot
          this.quicksort(arr, low, pivot - 1);
      
          // recur on sub-array containing elements more than pivot
          this.quicksort(arr, pivot + 1, high);

          return(arr)
      }
}

module.exports = QuickSort