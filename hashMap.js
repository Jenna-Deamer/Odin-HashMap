import { LinkedList } from "./linkedList.js";

export function hashMap() {
    let loadFactor = 0.75;
    let capacity = 16;
    let numOfEntries = 0;
    let buckets = new Array(capacity);

    function hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
        }
        // console.log('Key: ' + key + ' Hashed to ' + hashCode)
        return hashCode;
    }

    function isOverLoaded() {
        let currentLoadFactor = numOfEntries / capacity;
        if (currentLoadFactor > loadFactor) {
            console.log(numOfEntries)
            console.log('Overloaded: ' + currentLoadFactor)
            resizeMap()
        }
    }

    function resizeMap() {
        capacity = capacity * 2; // Next prime num
        console.log('New capacity: ' + capacity)

        let oldBuckets = buckets;
        // Loop through and rerun set on all pairs. Giving them new locations since cap increased.
        buckets = new Array(capacity);
        oldBuckets.forEach(bucket => {
            let currentNode = bucket.currentHead();
            let length = bucket.currentSize();

            for (let i = 0; i <= length; i++) {
                if (currentNode) {
                    buckets.set(currentNode.val.key, currentNode.val.value);
                    currentNode = currentNode.nextNode;
                }

            }
        })



    }

    function set(key, value) {
        const index = hash(key);
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        const bucket = buckets[index];

        if (bucket === undefined) {
            let list = LinkedList();
            console.log('Bucket is empty creating new list for ' + key)
            list.append({ key, value });
            buckets[index] = list;
            numOfEntries++;
            isOverLoaded();
        } else {
            let list = buckets[index];
            let length = list.currentSize();
            let currentNode = list.currentHead();

            for (let i = 0; i <= length; i++) {
                if (currentNode.val.value === key) {
                    console.log('Updating: ' + key)
                    currentNode.val.value = value;
                } else if (i === length - 1) {
                    console.log(key + ' - No match - appending')
                    list.append({ key, value });
                    numOfEntries++;
                    isOverLoaded();
                } else {
                    currentNode = currentNode.nextNode
                }
            }
        }
    }

    function get(key) {
        const index = hash(key);
        const list = buckets[index];
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if (list) {
            let currentNode = list.currentHead();
            let length = list.currentSize();

            for (let i = 0; i <= length; i++) {
                if (currentNode.val.key === key) {
                    console.log('Key found in list: ' + currentNode.val.key)
                    return currentNode.val.value;
                }
                else if (i === length - 1) {
                    console.log(key + ' - Searched list - key does not exist')
                    return null
                } else {
                    currentNode = currentNode.nextNode;
                }
            }
        } else {
            console.log(key + ' - Bucket empty - Key does not exist')
            return null
        }
    }

    function has(key) {
        const index = hash(key);
        const list = buckets[index];

        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if (list) {
            let currentNode = list.currentHead();
            let length = list.currentSize();

            for (let i = 0; i <= length; i++) {
                if (currentNode.val.key === key) {
                    return true;
                }
                else if (i === length - 1) {
                    return false;
                } else {
                    currentNode = currentNode.nextNode;
                }
            }
        } else {
            return false;
        }
    }

    function remove(key) {
        const index = hash(key);
        const list = buckets[index];

        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if (list) {
            let currentNode = list.currentHead();
            let length = list.currentSize();

            for (let i = 0; i <= length; i++) {
                if (currentNode.val.key === key) {
                    list.removeAt(i);
                    numOfEntries--;
                    return true;

                } else if (i === length - 1) {
                    return false;
                } else {
                    currentNode = currentNode.nextNode;
                }
            }
        } else {
            return false;
        }
    }

    function getLength() {
        let totalLength = 0;
        buckets.forEach(bucket => {
            let listLength = bucket.currentSize();
            totalLength += listLength;
        })

        console.log('Total length: ' + totalLength)
        return totalLength;

    }

    function clear() {
        buckets.splice(0, capacity)
        numOfEntries = 0;
    }

    function keys() {
        let listOfKeys = [];
        buckets.forEach(bucket => {
            let currentNode = bucket.currentHead();
            let length = bucket.currentSize();

            for (let i = 0; i <= length; i++) {
                if (currentNode) {
                    listOfKeys.push(currentNode.val.key);
                    currentNode = currentNode.nextNode;

                }
            }
        });

        return listOfKeys;
    }

    function values() {
        let listOfValues = [];
        buckets.forEach(bucket => {
            let currentNode = bucket.currentHead();
            let length = bucket.currentSize();

            for (let i = 0; i <= length; i++) {
                if (currentNode) {
                    listOfValues.push(currentNode.val.value);
                    currentNode = currentNode.nextNode;

                }
            }
        });
        return listOfValues;
    }

    function entries() {
        let listOfPairs = '';

        buckets.forEach(bucket => {
            let currentNode = bucket.currentHead();
            let length = bucket.currentSize();

            for (let i = 0; i <= length; i++) {
                if (currentNode) {
                    listOfPairs += `[${currentNode.val.key}, ${currentNode.val.value}],  `
                    currentNode = currentNode.nextNode;
                }
            }
        })
        return listOfPairs;

    }

    return { hash, set, get, has, remove, getLength, clear, keys, values, entries }
};

