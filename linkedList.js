export const Node = function (val) {
    let nextNode = null;

    return { val, nextNode };
};

export function LinkedList() {
    let head = null;
    let tail = null;
    let length = 0;

    const append = (value) => {
        const newNode = Node(value);

        if (length === 0) {
            head = newNode;
            tail = newNode;
        } else {
            // current tail must point to newNode (currentEnd -> NewEnd)
            tail.nextNode = newNode;
            tail = newNode;
        }

        length++;
        // console.log(`Head is: ${JSON.stringify(head)}`);
        // console.log(`Tail is: ${JSON.stringify(tail)}`);
        // console.log(`Length is: ${length}`);
    };

    const prepend = (value) => {
        const newNode = Node(value);
        if (length === 0) {
            head = newNode;
            tail = newNode;
        } else {
            // set newNode next to current head, then set it as head
            newNode.nextNode = head;
            head = newNode;
        }
        length++;
    };
    const currentSize = () => {
        return length;
    };

    const currentHead = () => {
        return head;
    };

    const currentTail = () => {
        return tail;
    };

    const getCurrentIndex = (index) => {
        console.log("index: " + index);
        if (index < 0 || index >= length) {
            return "Out of bounds";
        } else {
            let currentNode = head;
            let currentIndex = 0;

            while (index <= length) {
                if (index === currentIndex) {
                    return currentNode;
                } else {
                    currentNode = currentNode.nextNode;
                    currentIndex++;
                }
            }
        }
    };

    const pop = () => {
        console.log("Pop!");
        if (length <= 0) {
            return "Error list is empty.";
        } else {
            let currentNode = head;
            // Find the node beside the current tail
            while (currentNode.nextNode != tail) {
                currentNode = currentNode.nextNode;
                console.log(currentNode);
            }
            // Remove it's pointer and set it as new tail
            if (currentNode.nextNode === tail) {
                currentNode.nextNode = null;
                tail = currentNode;
            }
        }
    };

    const contains = (searchValue) => {
        if (length <= 0) {
            return null;
        }
        let currentNode = head;

        for (let i = 0; i < length; i++) {
            console.log(searchValue)
            console.log(currentNode.val)
            if (currentNode.val === searchValue) {
                console.log("Found " + currentNode.val);
                return currentNode;
            }
            else if (i === length - 1) {
                console.log('Value not in list');
                return null
            }
            currentNode = currentNode.nextNode;

        }
    };

    const find = (value) => {
        if (length <= 0) {
            return null;
        }

        let currentNode = head;

        for (let i = 0; i <= length; i++) {
            if (currentNode.val === value) {
                console.log('Found at: ' + i);
                break;
            } else if (i === length - 1) {
                console.log('Value not in list');
                return null
            }
            else {
                currentNode = currentNode.nextNode
            }

        }
    };

    const listToString = () => {
        if (length <= 0) {
            return "List is empty";
        } else {
            let currentNode = head;
            let output = '';
            for (let i = 0; i < length; i++) {
                output += `${currentNode.val} -> `
                currentNode = currentNode.nextNode;
            }
            output += 'null'
            return output
        }
    }


    const removeAt = (index) => {
        console.log('index is: ' + index)

        if (index < 0 || index > length) {
            return 'Index out of bounds'
        } else {
            let currentNode = head;
            let prevNode = null;
            let currentIndex = 0;


            while (index <= length) {
                if (index === currentIndex) {
                    console.log("To be deleted...")
                    console.log(currentNode)
                    console.log('prev node')
                    console.log(prevNode)

                    prevNode.nextNode = currentNode.nextNode
                    console.log('updated prev node')
                    console.log(prevNode)


                    length--;
                    return true;
                } else {
                    prevNode = currentNode;
                    currentNode = currentNode.nextNode;
                    currentIndex++;

                }
            }
        }
    }

    return {
        append,
        prepend,
        currentSize,
        currentHead,
        currentTail,
        getCurrentIndex,
        pop,
        contains,
        find,
        listToString,
        removeAt
    };
}