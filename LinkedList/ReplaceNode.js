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
  
    // Method to replace a node with the given data in the linked list
    replace(oldData, newData) {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.data === oldData) {
          currentNode.data = newData;
          break;
        }
        currentNode = currentNode.next;
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
  
  // Replace the value 3 with 30 in the linked list
  list.replace(3, 30);
  
  console.log("Linked list after replacing 3 with 30:");
  currentNode = list.head;
  while (currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
  