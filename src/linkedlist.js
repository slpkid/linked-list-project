
function linkedListFactory () {
    let head
    let tail

    const append = (nodeName) => {
        const newNode = nodeFactory(nodeName)
        // if list is empty, set first node to
        // the head and tail...
        if (head === null || head === undefined) {
            head = newNode
            tail = newNode
        // otherwise, change current tail's next,
        // to the new node and change the tail to
        // new node.
        } else {
            tail.next = newNode
            tail = newNode
        }
    }

    const returnHead = () => {
        if (head === null || head === undefined) return console.log(`The list's current head is: undefined`)
        console.log(`The list's current head is: ${head.name}`)
    }
    const returnTail = () => {
        if (tail === null || tail === undefined) return console.log(`The list's current tail is: undefined`)
        console.log(`The list's current tail is: ${tail.name}`)
    }
    let count = 0
    const countUpBy1 = () => count += 1
    const showCount = () => console.log(count)

    return {head, tail, append, returnHead, returnTail}
}

function nodeFactory(name, next) {
    return {name, next}
}

const list = linkedListFactory()

list.returnHead()
list.returnTail()

list.append('dog')

list.returnHead()
list.returnTail()