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
      this.tail = null;
    }
  
    // Method to add a new node at the end of the linked list
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    // Method to add a new node at the beginning of the linked list
    prepend(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    }
  
    // Method to delete a node with the given data from the linked list
    delete(data) {
      if (!this.head) {
        return;
      }
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
      let currentNode = this.head;
      while (currentNode.next) {
        if (currentNode.next.data === data) {
          currentNode.next = currentNode.next.next;
          if (currentNode.next === null) {
            this.tail = currentNode;
          }
          return;
        }
        currentNode = currentNode.next;
      }
    }
  
    // Method to display the linked list as an array
    toArray() {
      const result = [];
      let currentNode = this.head;
      while (currentNode) {
        result.push(currentNode.data);
        currentNode = currentNode.next;
      }
      return result;
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
  
  // Prepend a node to the linked list
  linkedList.prepend(0);
  
  // Delete a node from the linked list
  linkedList.delete(2);
  
  // Display the linked list
  console.log(linkedList.toArray()); // Output: [0, 1, 3, 4]
  