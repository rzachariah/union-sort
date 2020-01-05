# union-sort
Produce an array that is the sorted deduped union of two sorted arrays

## Prerequisites
0. nodejs >= v8

## Install packages
```
yarn
```

## Usage
```
const unionSort=require('./lib/union-sort');

const a=[1,2,4,5];
console.log('a', a);
const b=[3,4,7];
console.log('b', b);

const c=unionSort(a,b);
console.log('c=unionSort(a,b)', c);
```

## Run example
```
yarn start
```

## Run unit tests
```
yarn test
```