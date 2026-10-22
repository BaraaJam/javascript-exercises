const cart = [19.99, 5.50, 24.00];

const total = cart.reduce((accumulator, price) => accumulator + price, 0);

console.log(`Total: $${total.toFixed(2)}`);