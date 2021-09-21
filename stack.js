/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const node = new Node(val)
    if (!this.first) {
      this.first = node
      this.last = node
    } else {
      this.first.next = node
      this.first = node
    }
    this.size++
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first) throw new Error('cannot pop from an empty stack')
    const val = this.first.val
    
    if (this.first === this.last) this.last = null

    this.first = this.first.next
    this.size--
    return val
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    const val = this.first.val
    return val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    const empty = this.first === null && this.last === null
    return empty
  }
}

module.exports = Stack;
