export const Factorial = (number: number): number =>{
  if(number < 0) {
    return -1;
  }
  if (number === 0 || number === 1) {
    return 1;
  }
  
  return number * Factorial(number - 1);
}