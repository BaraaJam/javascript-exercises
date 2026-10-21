// Prediction 1: true (type coercion converts "10" to number 10)
console.log(10 == "10");

// Prediction 2: false (strict equality checks type: number !== string)
console.log(10 === "10");

// Prediction 3: true (loose equality treats null and undefined as equal absence of value)
console.log(undefined == null);

// Prediction 4: false (strict equality checks type: undefined !== null)
console.log(undefined === null);

/*
Why we should prefer === for checking user IDs or passwords:
Loose equality (==) performs type coercion, which can produce dangerous false positives
(for example, 0 == "" is true, or 0 == false is true).
Strict equality (===) ensures both the data type and the exact value match without conversion,
preventing authorization bypasses and unexpected security bugs.
*/