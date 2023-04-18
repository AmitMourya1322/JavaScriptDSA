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
  
    // Method to reverse the linked list
    reverse() {
      let prevNode = null;
      let currentNode = this.head;
      let nextNode = null;
  
      while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
      }
  
      this.head = prevNode;
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
  
  console.log("Original linked list: ");
  console.log(list.head);
  
  // Reverse the linked list
  list.reverse();
  
  console.log("Reversed linked list: ");
  console.log(list.head);