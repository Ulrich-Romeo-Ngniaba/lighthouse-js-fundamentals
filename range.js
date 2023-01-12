const range = function (start, end, step) {
  const rangeNumbers = [];
  if(start === undefined || end === undefined || step === undefined){
    return [];
  }
  if (step <= 0) {
    return [];
  }
  if(start > end){
    return [];
  }
  let nextNumber = start;
  while (nextNumber <= end) {
    rangeNumbers.push(nextNumber);
    nextNumber += step;  
  }
  return rangeNumbers;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));