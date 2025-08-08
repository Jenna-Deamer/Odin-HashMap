import { LinkedList } from "./linkedList.js";

export function hashMap() {
    const loadFactor = 0.75;
    const capacity = 16;
    let buckets = new Array(capacity);

    function hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
        }
        return hashCode;
    }

    function set(key, value) {
        const index = hash(key);
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const pair = { key: key, value: value }
        console.log(pair)

        if (buckets[index]) {
            console.log('Found')
            let list = buckets[index];
          
            // Find linked list that contains the key
            // Update value with new value
        }
        if (buckets[index] === undefined) {
            console.log(buckets[index])
            // Create linked list
            const list = LinkedList();
            // Append pair
            list.append(pair);
            buckets.splice(index, 0, list)
        }

    }


    return { hash, set }
};

