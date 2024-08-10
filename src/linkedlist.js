
function linkedListFactory () {
    let head
    let tail
    let size = 0

    const append = (nodeName) => {
        const newNode = nodeFactory(nodeName)
        // if list is empty, set first node to
        // the head and tail...
        if (head === null || head === undefined) {
            head = newNode
            tail = newNode
            size += 1
            return
        // otherwise, change current tail's next,
        // to the new node and change the tail to
        // new node.
        } else {
            tail.next = newNode
            tail = newNode
            size += 1
            return
        }
    }

    // add a new node to the 
    // beginning of the list
    const prepend = (nodeName) => {
        const newNode = nodeFactory(nodeName)

        if (head === null || head === undefined) {
            head = newNode
            tail = newNode
            size += 1
            return
        } else {
            newNode.next = head
            head = newNode
            size += 1
            return
        }
    }

    // renders a string containing 
    // the contents of the linked list
    const toString = () => {
        if (head === undefined || head === null) return 
        let tmp = head
        let string = ''
        while (tmp !== undefined) {
            string +=  `(${tmp.name}) -> `
            tmp = tmp.next
        }
        string += 'null'
        return string
    }

    // check to see if the value 
    // exists within the list
    const contains = (value) => {
        if (head === undefined || head === null) return 
        let tmp = head
        while (tmp !== undefined) {
            if (tmp.name === value) return true
            tmp = tmp.next
        }
        return false
    }

    const find = (value) => {
        if (head === undefined || head === null) return 
        let tmp = head
        let i = 0
        while (tmp !== undefined) {
            if (tmp.name === value) return i
            tmp = tmp.next
            i++
        }
        return null
    }

    // removes last item in the list
    const pop = () => {
        if (tail === null || tail === undefined) return
        let tmp = head
        while (tmp.next.next !== undefined) {
            tmp = tmp.next
        }
        tmp.next = undefined
        tail = tmp
    }

    // returns node at queried index
    const at = (index) => {
        if (tail === undefined || tail === null) return
        let tmp = head
        for (let i = 0; i < index; i++) {
            tmp = tmp.next
        }
        return tmp
    }

    const returnSize = () => console.log(`List's size is: ${size}`)

    const returnHead = () => {
        if (head === null || head === undefined) return console.log(`The list's current head is: undefined`)
        console.log(`The list's current head is: ${head.name}`)
        return head
        
    }
    const returnTail = () => {
        if (tail === null || tail === undefined) return console.log(`The list's current tail is: undefined`)
        console.log(`The list's current tail is: ${tail.name}`)
        return tail
    }

    return {head, tail, size, append, prepend, returnHead, returnTail, returnSize, at, pop, toString, contains, find}
}

function nodeFactory(name, next) {
    return {name, next}
}

const list = linkedListFactory()

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString())