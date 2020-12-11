import { arrayify } from "../../utils/arrayify";

export const testArray = (array: number []) => {
  array = arrayify();
  if(array.length === 0){
    for (let index = 0; index < 10; index++) {
      array.push(Math.floor(Math.random() * 100))
    }
  }

  return array;
}