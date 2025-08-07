const hashMap = (function () {
    const loadFactor = 0.75;
    const capacity = 16;
    let buckets = new Array(capacity);

    function hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    function set(key, value) {
        const index = hash(key);
        console.log(index)

        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const pair = { key: key, value: value }
        console.log(pair)

    }


    return { hash, set }
})();


hashMap.set('apple', 'red')