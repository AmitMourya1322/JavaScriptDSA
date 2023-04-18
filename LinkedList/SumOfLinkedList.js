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
  
    // Method to calculate the sum of two linked lists
    static sumLists(list1, list2) {
      let carry = 0;
      let result = new LinkedList();
      let currentNode1 = list1.head;
      let currentNode2 = list2.head;
  
      while (currentNode1 || currentNode2) {
        const sum = (currentNode1 ? currentNode1.data : 0) + (currentNode2 ? currentNode2.data : 0) + carry;
        carry = Math.floor(sum / 10);
        result.append(sum % 10);
        if (currentNode1) {
          currentNode1 = currentNode1.next;
        }
        if (currentNode2) {
          currentNode2 = currentNode2.next;
        }
      }
  
      if (carry > 0) {
        result.append(carry);
      }
  
      return result;
    }
  }
  
  // Example usage:
  
  // Create two linked lists
  const list1 = new LinkedList();
  const list2 = new LinkedList();
  
  // Append nodes to the first linked list
  list1.append(2);
  list1.append(4);
  list1.append(3);
  
  // Append nodes to the second linked list
  list2.append(5);
  list2.append(6);
  list2.append(4);
  
  // Calculate the sum of the two linked lists
  const sumList = LinkedList.sumLists(list1, list2);
  
  // Print the result
  let currentNode = sumList.head;
  const result = [];
  while (currentNode) {
    result.push(currentNode.data);
    currentNode = currentNode.next;
  }
  
  console.log(`Sum of linked lists: ${result.join(" -> ")}`);