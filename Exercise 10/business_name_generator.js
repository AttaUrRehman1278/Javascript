let adjective = `Crazy Amazing Fire`;
let shop_name = `Garments Foods Engine`;
let another_word = `Limited Hub Bros`;

let adj = adjective.split(' ');
let shop = shop_name.split(' ');
let word = another_word.split(' ');

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let i = randomNumber(0, 3)
let j = randomNumber(0, 3)
let k = randomNumber(0, 3)
let ShopName = console.log(`${adj[i]} ${shop[j]} ${word[k]} `)

