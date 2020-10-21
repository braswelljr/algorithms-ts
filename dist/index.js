"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../dist/utils/utils");
const HeapSort_1 = require("../dist/Sort/HeapSort");
const BubbleSort_1 = require("../dist/Sort/BubbleSort");
const CombSort_1 = require("../dist/Sort/CombSort");
const array = utils_1.arrayify();
console.log(`Original Array => ${array}`);
/**
 * Heap Sort Algorithm
 *
 * @param array
 * @returns Sorted Array by calling Sorted Function
 */
const heap = new HeapSort_1.HeapSort(array);
console.log(`Heap Sorted => ${heap.sort()}`);
/**
 * Bubble Sort Algorithm
 *
 * @param array
 * @funcs ascend, descend
 * @returns Sorted Array by calling ascend or descend function
 */
const bubble = new BubbleSort_1.BubbleSort(array);
console.log(`Ascend => ${bubble.ascend()}`);
console.log(`Descend => ${bubble.descend()}`);
/**
 * Comb Sort Algorithm
 *
 * @param array
 * @funcs sort
 * @returns Sorted Array by calling sort function
 */
const comb = new CombSort_1.CombSort(array, .4);
console.log(`CombSort => ${comb.sort()}`);
//# sourceMappingURL=index.js.map