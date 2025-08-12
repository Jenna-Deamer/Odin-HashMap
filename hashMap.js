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

        // Bucket has items: Search for key update if found. Append if not
        if (buckets[index]) {
            console.log('bucket contains items')
            let list = buckets[index];
            let currentNode = list.currentHead();
            let length = list.currentSize()

            for (let i = 0; i <= length; i++) {

                if (currentNode.val.key === key) {
                    console.log('Match found - updating value')
                    currentNode.val.value = value;
                    break;
                } else if (i === length - 1) {
                    console.log("No match - appending")
                    list.append(pair);
                    buckets.splice(index, 0, list)
                }
                else {
                    currentNode = currentNode.nextNode
                }
            }
        }

        // Bucket is empty: create linked list & append pair 
        if (buckets[index] === undefined) {
            console.log('Bucket empty - creating linked list')
            const list = LinkedList();
            list.append(pair);
            buckets.splice(index, 0, list)
        }
    }


    function get(key) {
        const index = hash(key);

        if (buckets[index]) {
            let list = buckets[index];
            let currentNode = list.currentHead();
            let length = list.currentSize()

            for (let i = 0; i <= length; i++) {
                if (currentNode.val.key === key) {
                    return currentNode.val.value;
                }
                else if (i === length - 1) {
                    return null
                }
            }
        } else {
            return null
        }
    }

    function has(key) {
        const index = hash(key);

        if (buckets[index]) {
                let list = buckets[index];
            let currentNode = list.currentHead();
            let length = list.currentSize()

            for (let i = 0; i <= length; i++) {
                if (currentNode.val.key === key) {
                    return true;
                }
                else if (i === length - 1) {
                    return false;
                }
            }

        } else { return false }
    }
    return { hash, set, get, has }
};

