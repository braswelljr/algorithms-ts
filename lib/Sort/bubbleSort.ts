import {arrayify} from '../utils/utils'

export class BubbleSort {
  array: any = []
  constructor(array: any[]) {
    this.array = array
    console.log(`New BubbleSort instance initialised`)
  }

  /**
   * Ascending order
   * 
   * @default ascend
   * @return array
   */
  ascend(): number [] {
    let index: number = 0
    while (index < this.array.length) {
      this.array.forEach((event: any, iterator: any) => {
        if (event > this.array[iterator + 1]) {
          [this.array[iterator], this.array[iterator + 1]] = [this.array[iterator + 1], event]
        }
      })
      index ++
    }
    return this.array
  }

  /**
   * Descending order
   *
   * @default ascend
   * @return array
   */
  descend(): number [] {
    let index: number = 0
    while (index < this.array.length) {
      this.array.forEach((event: any, iterator: any) => {
        if (event < this.array[iterator + 1]) {
          [this.array[iterator], this.array[iterator + 1]] = [this.array[iterator + 1], event]
        }
      })
      index ++
    }
    return this.array
  }
}

/**
 * Initial a new Bubble object and pass the array as a param 
 * To arrange in ascending order object.ascend()
 * object.descend() to arrange in descending order
 */
const bubble = new BubbleSort(arrayify())
console.log(`
Array => ${arrayify()}
Array(ascending order) => ${bubble.ascend()}
Array(descending order) => ${bubble.descend()}
`)