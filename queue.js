/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const node = new Node(val)
    if (!this.first) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }
    this.size++
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    const val = this.first.val
    if (val === null) throw new Error('cannot dequeue from an empty queue')
    this.first = this.first.next
    this.size--
    if (this.size < 2) this.last = this.first
    return val
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    const val = this.first.val
    return val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    const empty = this.first === null && this.last === null
    return empty
  }
}

module.exports = Queue;
