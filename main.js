import { hashMap } from "./hashMap.js";


const test = hashMap();

test.set('apple', 'red') // 10
test.set('apple', 'Better Red') // 10
test.set('banana', 'yellow') // 5
test.set('carrot', 'orange') // 3
test.set('dog', 'brown') // 12
test.set('elephant', 'gray') // 1
test.set('frog', 'green') // 4
test.set('grape', 'purple') // 11
test.set('hat', 'black') // 11
test.set('ice cream', 'white') // 13
test.set('jacket', 'blue') // 14
test.set('kite', 'pink') // 15
test.set('lion', 'golden') // 12



// test.get('apple')
// test.get('banana')
// test.has('carrot')
// test.has('dog')
// test.has('frog') 
// test.has('banana')
// test.remove('grape')
// test.get('grape')
// test.get('hat')
// test.get('a{')
// test.values();
test.entries();
// test.has('hat')
// test.has('You wont find me!') 