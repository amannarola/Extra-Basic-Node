const _ = require('lodash');

/* let words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

let fel = _.first(words);
let lel = _.last(words);

console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`); */


//let nums = [1, 2, 3, 4, 5, 6, 7, 8];
 
/* console.log(_.nth(nums, 3));
console.log(_.nth(nums, -3));

let c1 = _.chunk(nums, 2);
console.log(c1);

let c2 = _.chunk(nums, 3);
console.log(c2);

let c1 = _.slice(nums, 2, 6);
console.log(c1); 

let c=_.random(5, 10);
console.log(c); 

_.times(4, () => {

    console.log("brave");
})  

let vals = [1, 2, 'good', [1, 2], {name: 'Peter', age: 32}];

vals.forEach( (e) => {

    if (_.isNumber(e)) {
        console.log(`${e} is a number`);
    }

    if (_.isString(e)) {
        console.log(JSON.stringify(e) + ' is a string');
    }

    if (_.isArray(e)) {
        console.log(JSON.stringify(e) + ' is an array');
    }

    if (_.isObject(e)) {
        console.log(JSON.stringify(e) + ' is an object');
    }

});  */

let nums = [4, -5, 3, 2, -1, 7, -6, 8, 9];

let pos_nums = _.filter(nums, (e) => e > 0);
console.log(pos_nums);