export function isWeekend(deliveryDate) {
  if(deliveryDate.day() === 0){
    return 'Sun';
  }
  else if(deliveryDate.day() === 6){
    return 'Sat';
  }else{
    return 'Null';
  }
}

export default isWeekend;