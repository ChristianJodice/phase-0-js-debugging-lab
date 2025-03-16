function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    debugger
    for (let i = 1; i < quantity; i++) {
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}



module.exports = calculateDiscountedPrice;

// Function to calculate the discounted price based on quantity and price per item
function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    debugger; // Start debugging from here

    // Fix: Loop should start from 0 instead of 1
    for (let i = 0; i < quantity; i++) {  // Start from 0 to correctly account for all items
        totalPrice += pricePerItem;
        debugger;  // Debug inside the loop to inspect `totalPrice` and `i`
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;  // Apply 10% discount if quantity is 10 or more
    }

    debugger;  // Debug before returning the result to inspect the final totalPrice
    return totalPrice;
}

// Example Test Cases:
console.log(calculateDiscountedPrice(5, 20));  // Expected: 100 (5 items, no discount)
console.log(calculateDiscountedPrice(10, 20)); // Expected: 180 (10 items, 10% discount)
console.log(calculateDiscountedPrice(15, 30)); // Expected: 405 (15 items, 10% discount)
