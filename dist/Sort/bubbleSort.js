"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = void 0;
const utils_1 = require("../utils/utils");
class BubbleSort {
    constructor(array) {
        this.array = [];
        this.array = array;
        console.log(`New BubbleSort instance initialised`);
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
exports.BubbleSort = BubbleSort;
/**
 * Initial a new Bubble object and pass the array as a param
 * To arrange in ascending order object.ascend()
 * object.descend() to arrange in descending order
 */
const bubble = new BubbleSort(utils_1.arrayify());
console.log(`
Array => ${utils_1.arrayify()}
Array(ascending order) => ${bubble.ascend()}
Array(descending order) => ${bubble.descend()}
`);
//# sourceMappingURL=BubbleSort.js.map