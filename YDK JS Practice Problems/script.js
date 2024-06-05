const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.2;
const PHONE_PRICE = 99.99;
const PHONE_ACCESSORIES = 9.9;

var bank_balance = 1000;
var amount = 0;

function calculateTaxRate() {
    return amount * TAX_RATE;
}

function formattedAmount() {
    return "$" + toString(amount);
}

function calculatePurchase() {
    amount = amount + PHONE_PRICE;
    if (amount < SPENDING_THRESHOLD){
        amount = amount + PHONE_ACCESSORIES;
    }
    return amount;
}