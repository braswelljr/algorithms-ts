export const arrayfill: any = () => {
  var array: number[] = []
  
  for (let index = 0; index < 10; index++) {
    array.push(Math.floor(Math.random() * 100))
  }

  return array
}