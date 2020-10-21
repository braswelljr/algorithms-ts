class HeapSort {
    constructor(array) {
        this.sort = () => {
            console.log(`\nNew Heap Sort instance created`);
            // the largest element is moved at the first place
            this.buildMaxHeap();
            // the first element is moved to the end and the next largest element is moved to the first place on each iteration
            // the heapsize decreases because the end of the array become ordered
            for (let index = this.array.length - 1; index >= 0; index--) {
                this.swap(this.array, 0, index);
                this.heapSize--;
                this.maxHeap(0);
            }
            return this.array;
        };
        this.array = array;
        this.heapSize = array.length;
    }
    buildMaxHeap() {
        for (let index = Math.floor(this.array.length / 2); index >= 0; index--) {
            this.maxHeap(index);
        }
    }
    // the largest element between i, left(i) and right(i) will take the place of i
    maxHeap(index) {
        var left = this.left(index);
        var right = this.right(index);
        var largest = index;
        if (left < this.heapSize && this.array[left] > this.array[index]) {
            largest = left;
        }
        if (right < this.heapSize && this.array[right] > this.array[largest]) {
            largest = right;
        }
        if (largest != index) {
            this.swap(this.array, index, largest);
            this.maxHeap(largest);
        }
    }
    swap(array, x, y) {
        let excess = x;
        x = y;
        y = excess;
        return this;
    }
    left(index) {
        return 2 * index + 1; // +1 because an array start at 0
    }
    right(index) {
        return 2 * index + 2; // +1 because an array start at 0
    }
}
module.exports = {
    HeapSort
};
//# sourceMappingURL=HeapSort.js.map