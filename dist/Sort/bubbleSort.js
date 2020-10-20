"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./../utils/utils");
class BubbleSort {
    constructor(array) {
        this.array = [];
        this.array = array;
        this.ascend();
    }
    /**
     * Ascending order
     *
     * @default ascend
     * @retuen array
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
     * @retuen array
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
/**
 * Initial a new Bubble object and pass the array as a param
 * To arrange in ascending order object.ascend()
 * object.descend() to arrange in descending order
 */
const bubble = new BubbleSort(utils_1.arrayfill());
console.log(`
Array => ${utils_1.arrayfill()}
Array(ascending order) => ${bubble.ascend()}
Array(descending order) => ${bubble.descend()}
`);
//# sourceMappingURL=bubbleSort.js.map