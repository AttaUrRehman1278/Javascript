const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.02;
const PHONE_PRICE = 89.99;
const PHONE_ACCESSORIES = 5.9;

var bank_balance = 1300;
var amount = 0;

function calculateTaxRate(amount) {
    return amount * TAX_RATE;
}

function formattedAmount(amount) {
    return "$" + amount.toFixed(2);
}

while (amount < bank_balance) {
    amount = amount + PHONE_PRICE;
    
    if(amount < SPENDING_THRESHOLD) {
        amount = amount + PHONE_ACCESSORIES; 
    }
}

amount = amount + calculateTaxRate(amount);

console.log(`Your purchase: ${formattedAmount(amount)}`)

if (amount > bank_balance) {
    console.log("Sorry! you can\'t afford this")
}