const Node = require("./singlyLinkedList").Node;
const SinglyLinkedList = require("./singlyLinkedList").SinglyLinkedList;

const listA = new SinglyLinkedList();
listA.push(1);

const listB = new SinglyLinkedList();
listB.push(1);
listB.push(2);
listB.push(4);

function mergeLists(nodeA, nodeB) {
  let newList = new SinglyLinkedList();

  let n1 = nodeA;
  let n2 = nodeB;

  while (n1 || n2) {
    if (!n1) {
      newList.push(n2.val);
      n2 = n2.next;
    } else if (!n2) {
      newList.push(n1.val);
      n1 = n1.next;
    } else if (n2.val < n1.val) {
      newList.push(n2.val);
      n2 = n2.next;
    } else {
      newList.push(n1.val);
      n1 = n1.next;
    }
  }

  return newList.head;
}

console.log("asdfasf", mergeLists(listA.head, listB.head));
