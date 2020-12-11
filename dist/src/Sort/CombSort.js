/**
 * Comb Sort Algorithm
 *
 * @type Bubble Sorts and Variants
 * @param array
 * @funcs sort
 * @returns Sorted Array by calling sort function
 */
class CombSort {
    constructor(array, gap) {
        this.sorted = false;
        this.sort = () => {
            console.log(`\nNew Comb Sort object created`);
            while (!this.sorted) {
                if (Math.floor(this.gap) <= 1) {
                    this.sorted = true;
                    this.gap = 1;
                }
                let index = 0;
                while (index + this.gap < this.array.length) {
                    if (this.array[index] > this.array[this.gap + index]) {
                        let el = this.array[index];
                        this.array[index] = this.array[this.gap + index];
                        this.array[this.gap + index] = el;
                        this.sorted = false;
                    }
                    index++;
                }
            }
            return this.array;
        };
        this.array = array;
        this.arraylen = array.length;
        this.gap = gap;
    }
}
module.exports = {
    CombSort
};
//# sourceMappingURL=CombSort.js.map