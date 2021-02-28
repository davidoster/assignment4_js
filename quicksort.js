class QuickSort {
    swap(items, firstIndex, secondIndex) {
        var temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    }

    partition(items, left, right, attribute) {
        var pivot = items[Math.floor((right + left) / 2)],
            i = left,
            j = right;
        while (i <= j) {
            // Size
            if (attribute == 'Size') {
                while (items[i]._size < pivot._size) {
                    i++;
                }
                while (items[j]._size > pivot._size) {
                    j--;
                }
            }
            // Color
            if (attribute == 'Color') {
                while (items[i]._color < pivot._color) {
                    i++;
                }
                while (items[j]._color > pivot._color) {
                    j--;
                }
            }
            // Fabric
            if (attribute == 'Fabric') {
                while (items[i]._fabric < pivot._fabric) {
                    i++;
                }
                while (items[j]._fabric > pivot._fabric) {
                    j--;
                }
            }
            if (i <= j) {
                this.swap(items, i, j);
                i++;
                j--;
            }
        }
        return i;
    }

    quicksort(items, left, right, attribute, type) {
        var index;
        if (items.length > 1) {
            index = this.partition(items, left, right, attribute);
            if (left < index - 1) {
                this.quicksort(items, left, index - 1, attribute, type);
            }
            if (index < right) {
                this.quicksort(items, index, right, attribute, type);
            }
        }
        // if(type == 'DESC') return items.reverse()
        return items;
    }
}

module.exports = QuickSort