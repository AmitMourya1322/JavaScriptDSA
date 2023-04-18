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
  
    // Method to remove a node with the given data from the linked list
    remove(data) {
      if (!this.head) {
        return;
      }
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
      let currentNode = this.head;
      while (currentNode.next && currentNode.next.data !== data) {
        currentNode = currentNode.next;
      }
      if (currentNode.next && currentNode.next.data === data) {
        currentNode.next = currentNode.next.next;
      }
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
  
  console.log("Original linked list:");
  let currentNode = list.head;
  while (currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
  
  // Remove a node with the value 3 from the linked list
  list.remove(3);
  
  console.log("Linked list after removing 3:");
  currentNode = list.head;
  while (currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }