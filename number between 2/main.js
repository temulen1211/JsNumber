let x = prompt('X toog ugnu uu!');
let y = prompt('odoo Y toog ugnu uu!');
let xyArr = [x, y];

let lowest = Math.min(...xyArr);
let highest = Math.max(...xyArr);

let n = Math.floor(Math.random() * (highest - lowest)) + lowest;

console.log(n);