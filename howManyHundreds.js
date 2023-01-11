const howManyHundreds = function (aNumber){
  let rest = aNumber % 100;
  return (aNumber - rest)/100;
}