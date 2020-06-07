//.map() function that takes an array of items and a function that returns an array with
//each item manipulated by that function.
let circles = [
    10, 30, 50
];

function circleArea(radius) {
    return Math.floor(Math.PI * radius * radius);
}
let areas = circles.map(circleArea);
console.log(areas);

//.reduce() function that takes an array of food orders with their amounts
// and returns the total amount of all the food orders.
let foodOrder = [{
    product: 'happy meal',
    qty: 1,
    price: 6.99
},
{
    product: 'quarter pounder combo',
    qty: 1,
    price: 9.98
},
{
    product: 'large fries',
    qty: 2,
    price: 2.99
}
];


let total = foodOrder.reduce(function (acc, curr) {
return acc + curr.qty * curr.price;
},0);

console.log(total);

//.filter() function that takes an array of items and a function that returns 
//an array with only the items that return true in the function.


let powerRangers = [
    {name: 'Red Ranger', season: 1},
    {name: 'Green Ranger', season: 1},
    {name: 'Blue Ranger', season: 1},
    {name: 'Pink Ranger', season: 1},
    {name: 'White Ranger', season: 2}
];


let classicpowerRangers = powerRangers.filter(function (e) {
    return e.season < 2;
});
console.log(classicpowerRangers);