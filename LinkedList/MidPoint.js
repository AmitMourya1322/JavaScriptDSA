// Define a Node class to represent the nodes in the linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Define a LinkedList class to represent the linked list
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Method to add a new node at the end of the linked list
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let currentNode = this.head;
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      }
    }
  
    // Method to find the midpoint of the linked list
    findMidPoint() {
      let slowPointer = this.head;
      let fastPointer = this.head;
  
      while (fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
      }
  
      return slowPointer ? slowPointer.data : null;
    }
  }
  
  // Example usage:
  
  // Create a linked list
  const list = new LinkedList();
  
  // Append nodes to the linked list
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.append(5);
  
  // Find the midpoint of the linked list
  const midpoint = list.findMidPoint();
  
  console.log("Midpoint of the linked list: ", midpoint);
  