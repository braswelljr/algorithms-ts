import {arrayfill} from './../utils/utils'

class BubbleSort {
  array: any = []
  constructor(array: any) {
    this.array = array
    this.ascend()
  }

  /**
   * Ascending order
   * 
   * @default ascend
   * @retuen array
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
   * @retuen array
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
const bubble = new BubbleSort(arrayfill())
console.log(`
Array => ${arrayfill()}
Array(ascending order) => ${bubble.ascend()}
Array(descending order) => ${bubble.descend()}
`)