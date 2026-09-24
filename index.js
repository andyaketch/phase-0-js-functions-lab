// 1.calculateTax question
function calculateTax(amount) {
    const taxRate = 0.1;
     return amount * taxRate;
}  
// console.log("Tax on 30000 is ", calculateTax(30000)); 

// 2.conversio to Upper Case
function convertToUpperCase(text) {
    return text.toUpperCase();
}
// console.log(`Converting text to uppercase :${convertToUpperCase("nairobi")}`);

// 3.findMaximum
function findMaximum(num1, num2) {
     return Math.max(num1, num2);
}
// console.log("The maximum between the two entered numbers is ", findMaximum(15, 42));


// 4 .Palindrome
function isPalindrome(word) {
    const lCaseWord = word.toLowerCase();
    const reverseWord = lCaseWord.split("").reverse().join("");
    return lCaseWord === reverseWord;
}

// let firstWord = "repaper";
// console.log(`Is ${firstWord} a palindrome?: ${isPalindrome(firstWord)}`);

// let secondWord = "worldclass";
// console.log(`Is ${secondWord} a palindrome?: ${isPalindrome(secondWord)}`);



// 5. calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountedAmount = originalPrice * (discountPercentage /  100);
    return originalPrice - discountedAmount;
}

// console.log("The discounted price is : ", calculateDiscountedPrice(100, 20));


//This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
