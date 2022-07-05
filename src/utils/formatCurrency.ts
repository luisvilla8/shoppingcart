const NUM_CURRENCY = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const formatCurrency = (number: number) => {
  return NUM_CURRENCY.format(number);
}
