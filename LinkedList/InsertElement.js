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
  
    // Method to find a node with the given data in the linked list
    find(data) {
      if (!this.head) {
        return null;
      }
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.data === data) {
          return currentNode;
        }
        currentNode = currentNode.next;
      }
      return null; // return null if the data is not found
    }
  }
  
  // Example usage:
  
  // Create a new linked list
  const linkedList = new LinkedList();
  
  // Append nodes to the linked list
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);
  
  // Find a node with the value 3 in the linked list
  const foundNode = linkedList.find(3);
  
  if (foundNode) {
    console.log(`Node with value 3 found:`, foundNode);
  } else {
    console.log(`Node with value 3 not found.`);
  }
  