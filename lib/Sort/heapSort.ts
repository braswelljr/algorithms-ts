import { arrayify } from '../utils/utils'

export class HeapSort {
  [x: string]: any;

  constructor(array) {
    this.array = array;
    this.heapSize = array.length;
  }

  sort(): any[] {
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

  buildMaxHeap(): void {
    for (let index = Math.floor(this.array.length / 2); index >= 0; index--) {
      this.maxHeap(index);
    }
  }

  // the largest element between i, left(i) and right(i) will take the place of i
  maxHeap(index: number): any {
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

  left(index: number): number {
    return 2 * index + 1; // +1 because an array start at 0
  }

  right(index: number): number {
    return 2 * index + 2; // +1 because an array start at 0
  }
}

Array.prototype.swap = function(x: any, y:any): any{
  let excess = this[x]
  this[x] = this[y]
  this[y] = excess
  return this;
}
const mutate = arrayify()
const heapSort = new HeapSort(mutate);
console.log(`
Original => ${mutate}
Sorted => ${heapSort.sort()}`);