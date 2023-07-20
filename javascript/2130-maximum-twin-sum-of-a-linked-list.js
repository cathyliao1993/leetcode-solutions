/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Linear Time 
 * Time O(n) | Space O(1)
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  const mid = llLength(head) / 2;

  // get the right starting pointer
  let count = 0;
  let rightPointer = head;
  while (count < mid) {
    rightPointer = rightPointer.next;
    count++;
  }

  // reverse the left portion of the array
  leftPointer = reverseLL(head, mid);

  let max = 0;
  while (leftPointer && rightPointer) {
    max = Math.max(leftPointer.val + rightPointer.val, max);
    leftPointer = leftPointer.next;
    rightPointer = rightPointer.next;
  }

  return max;
};


var llLength = (head) => {
  let count = 0;
  while (head) {
    head = head.next;
    count++;
  }
  return count;
};

var reverseLL = (head, len) => {
  let count = 0;
  let temp = null;
  while (count < len) {
    const next = head.next;
    head.next = temp;
    temp = head;
    head = next;
    count++;
  }
  return temp;
};
