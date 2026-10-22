const inventory = [0, 12, 5, 0, 8, 3]

const inStock = inventory.filter(quantity => quantity > 0 )

console.log(inStock);