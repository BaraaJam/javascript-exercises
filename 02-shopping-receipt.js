const price = 150;
const quantity = 3;
const taxRate = 0.25; // 25% tax (VAT)

const subtotal = price * quantity;
const tax = subtotal * taxRate;
const finalPrice = subtotal + tax;

console.log("--- Shopping Receipt ---");
console.log(`Item Price: ${price} kr`);
console.log(`Quantity: ${quantity}`);
console.log(`Subtotal: ${subtotal} kr`);
console.log(`Tax (25%): ${tax} kr`);
console.log("------------------------");
console.log(`Total Price: ${finalPrice} kr`);