"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayify_1 = require("../dist/utils/arrayify");
const HeapSort_1 = require("../dist/src/Sort/HeapSort");
const BubbleSort_1 = require("../dist/src/Sort/BubbleSort");
const CombSort_1 = require("../dist/src/Sort/CombSort");
const Factorial_1 = require("../dist/src/Recursion/Factorial");
const array = arrayify_1.arrayify();
console.log(`Original Array => ${array}`);
/**
 * Heap Sort Algorithm
 *
 * @type Effecient Sorts
 * @param array
 * @returns Sorted Array by calling Sorted Function
 */
const heap = new HeapSort_1.HeapSort(array);
console.log(`Heap Sorted => ${heap.sort()}`);
/**
* Bubble Sort Algorithm
 *
 * @type Bubble Sorts and Variants
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
 * @type Bubble Sorts and Variants
 * @param array
 * @funcs sort
 * @returns Sorted Array by calling sort function
 */
const comb = new CombSort_1.CombSort(array, .4);
console.log(`CombSort => ${comb.sort()}`);
// const array = [85,99,49,55,39,54,15,55,68,81]
// const quick = new QuickSort(array)
// console.log(quick.sort())
console.log(Factorial_1.Factorial(9));
//# sourceMappingURL=index.js.map