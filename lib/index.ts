import { arrayify } from '../dist/utils/utils'
import { HeapSort } from '../dist/Sort/HeapSort'
import { BubbleSort } from '../dist/Sort/BubbleSort'
import { CombSort } from '../dist/Sort/CombSort'


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