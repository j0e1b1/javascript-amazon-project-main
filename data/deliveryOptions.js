export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
},{
  id: '2',
  deliveryDays: 3,
  priceCents: 499
},{
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}]

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption;
}

export function calculateDeliveryDate(deliveryOption,today) {
  let deliveryDate = today.add(deliveryOption.deliveryDays, 'day');
  if (deliveryDate.day() === 6) {
    return deliveryDate.add(2, 'day');
    }
  else if(deliveryDate.day() === 0) {
    return deliveryDate.add(1,'day');
  }
  return deliveryDate;
}