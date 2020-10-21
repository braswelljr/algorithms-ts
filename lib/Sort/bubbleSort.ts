/**
 *@author Braswelljr
 *@licence
 */
class BubbleSort {
  protected array: any = []
  constructor(array: any[]) {
    this.array = array
    console.log(`\nNew Bubble Sort instance created`)
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

module.exports = {
  BubbleSort
}