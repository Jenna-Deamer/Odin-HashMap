import { hashMap } from "./hashMap.js";


const test = hashMap();

test.set('apple', 'red')
test.set('j', 'red')
test.set('apple', 'New red')

console.log(test.has('apple'))
console.log(test.has('orange'))