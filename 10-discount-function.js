function applyDiscount(price, percentage) {
    return +(price * (1 - percentage / 100)).toFixed(2);
}
console.log(applyDiscount(100, 20));