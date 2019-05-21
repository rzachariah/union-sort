const unionSort=require('./lib/union-sort');

const a=[1,2,4,5];
console.log('a', a);
const b=[3,4,7];
console.log('b', b);

const c=unionSort(a,b);
console.log('c=unionSort(a,b)', c);