/**
 *@author Braswelljr
 *@licence
 */
class BubbleSort {
    constructor(array) {
        this.array = [];
        this.array = array;
        console.log(`\nNew Bubble Sort instance created`);
    }
    /**
     * Ascending order
     *
     * @default ascend
     * @return array
     */
    ascend() {
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
    }
    /**
     * Descending order
     *
     * @default ascend
     * @return array
     */
    descend() {
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
    }
}
module.exports = {
    BubbleSort
};
//# sourceMappingURL=BubbleSort.js.map