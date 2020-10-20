"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeapSort = void 0;
const utils_1 = require("./../utils/utils");
class HeapSort {
    constructor(array) {
        this.array = array;
        this.heapSize = array.length;
    }
    sort() {
        console.log("Heap sort.");
        // the largest element is moved at the first place
        this.buildMaxHeap();
        // the first element is moved to the end and the next largest element is moved to the first place on each iteration
        // the heapsize decreases because the end of the array become ordered
        for (let index = this.array.length - 1; index >= 0; index--) {
            this.array.swap(0, index);
            this.heapSize--;
            this.maxHeap(0);
        }
        return this.array;
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
            this.array.swap(index, largest);
            this.maxHeap(largest);
        }
    }
    left(index) {
        return 2 * index + 1; // +1 because an array start at 0
    }
    right(index) {
        return 2 * index + 2; // +1 because an array start at 0
    }
}
exports.HeapSort = HeapSort;
Array.prototype.swap = function (x, y) {
    let excess = this[x];
    this[x] = this[y];
    this[y] = excess;
    return this;
};
const mutate = utils_1.arrayfill();
var heapSort = new HeapSort(mutate);
console.log(`
Original => ${mutate}
Sorted => ${heapSort.sort()}`);
//# sourceMappingURL=heapSort.js.map