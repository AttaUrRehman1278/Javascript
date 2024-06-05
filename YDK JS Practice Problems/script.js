let purchase = 0;
let bank_balance = 1000;
let phone_price = 100;
let accessories = 10;

while(true){
    if (purchase <= 900){
        purchase = purchase + phone_price + accessories;
    }
    else{
        break;
    }
}
console.log(purchase)