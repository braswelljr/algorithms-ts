/**
 * Bubble Sort Algorithm
 *
 * @type Bubble Sorts and Variants
 * @param array
 * @funcs ascend, descend
 * @returns Sorted Array by calling ascend or descend function
 */
class BubbleSort {
    constructor(array) {
        this.array = [];
        /**
         * Ascending order
         *
         * @default ascend
         * @return array
         */
        this.ascend = () => {
            let index = 0;
            while (index < this.array.length) {
                this.array.forEach((event, iterator) => {
                    if (event > this.array[iterator + 1]) {
                        [this.array[iterator], this.array[iterator + 1]] = [this.array[iterator + 1], event];
                    }
                });
                index++;
            }
            return this.array;
        };
        /**
         * Descending order
         *
         * @default ascend
         * @return array
         */
        this.descend = () => {
            let index = 0;
            while (index < this.array.length) {
                this.array.forEach((event, iterator) => {
                    if (event < this.array[iterator + 1]) {
                        [this.array[iterator], this.array[iterator + 1]] = [this.array[iterator + 1], event];
                    }
                });
                index++;
            }
            return this.array;
        };
        this.array = array;
        console.log(`\nNew Bubble Sort instance created`);
    }
}
module.exports = {
    BubbleSort
};
//# sourceMappingURL=BubbleSort.js.map