import { hashMap } from "./hashMap.js";


const test = hashMap();

test.set('apple', 'red')
test.set('j', 'red')
test.set('apple', 'New red')

console.log(test.get('apple'))
console.log(test.get('orange'))