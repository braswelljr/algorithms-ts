/**
* Quick sort using the Hoare Partition scheme
*
* A = array
* p = pivot
* l, h = lower and higher elements of the partition
*/
class QuickSort {
    constructor(array) {
        this.array = array;
        this.arraylen = array.length;
        console.log(`Array of length ${this.arraylen}`);
    }
    /**
    * sort
    *
    */
    sort(array, lower, higher) {
        // if lo < hi then
        //   p := partition(A, lo, hi)
        //   quicksort(A, lo, p)
        //   quicksort(A, p + 1, hi)
        array = this.array;
        let partition = this.partition();
        if (lower < higher) {
            this.sort(array, 0, partition);
        }
        this.sort(array, partition + 1, this.arraylen);
        return array;
    }
    partition() {
        let pivot = this.array[(0 + this.arraylen) / 2];
        let index = 0;
        do {
            index = index + 1;
        } while (this.array[index] < pivot);
        let count = this.arraylen;
        do {
            count = count - 1;
        } while (this.array[count] > pivot);
        if (index > count) {
            return count;
        }
        let excess = this.array[index];
        this.array[index] = this.array[count];
        this.array[count] = excess;
    }
}
module.exports = { QuickSort };
//# sourceMappingURL=QuickSort.js.map