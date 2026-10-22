const oldPrices = [50, 100, 250]
const afterInflation = oldPrices.map(n => n + (n * 0.1));
console.log(afterInflation);
