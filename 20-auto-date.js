const date = new Date();

console.log(`Year: ${date.getFullYear()}`);
console.log(`Month: ${date.getMonth() + 1}`);

console.log(`Formatted Date: ${date.toLocaleDateString()}`);