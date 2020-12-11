import { arrayify } from '../dist/utils/arrayify'
import { HeapSort } from '../dist/src/Sort/HeapSort'
import { BubbleSort } from '../dist/src/Sort/BubbleSort'
import { CombSort } from '../dist/src/Sort/CombSort'
import { Factorial } from '../dist/src/Recursion/Factorial'

const array = arrayify()
console.log(`Original Array => ${array}`)

/**
 * Heap Sort Algorithm
 * 
 * @type Effecient Sorts
 * @param array
 * @returns Sorted Array by calling Sorted Function
 */
const heap = new HeapSort(array)
console.log(`Heap Sorted => ${heap.sort()}`)

/**
* Bubble Sort Algorithm
 * 
 * @type Bubble Sorts and Variants
 * @param array
 * @funcs ascend, descend
 * @returns Sorted Array by calling ascend or descend function
 */
const bubble = new BubbleSort(array)
console.log(`Ascend => ${bubble.ascend()}`)
console.log(`Descend => ${bubble.descend()}`)

/**
 * Comb Sort Algorithm
 * 
 * @type Bubble Sorts and Variants
 * @param array
 * @funcs sort
 * @returns Sorted Array by calling sort function
 */
const comb = new CombSort(array, .4)
console.log(`CombSort => ${comb.sort()}`)
// const array = [85,99,49,55,39,54,15,55,68,81]
// const quick = new QuickSort(array)
// console.log(quick.sort())

console.log(Factorial(9))