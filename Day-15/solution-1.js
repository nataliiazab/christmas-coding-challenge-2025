// Reverse Linked List - Iterative Approach

// In LeetCode, ListNode is predefined, but here we define it for completeness
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let next = curr.next; // Store the next node
    curr.next = prev; // Reverse the current node's pointer
    prev = curr; // Move prev to current
    curr = next; // Move to the next node
  }

  return prev; // prev is now the new head
}

// Example usage:
const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
reverseList(head);

// Step 1: // Initialize pointers:

// - prev = null (will become the new head eventually).
// - curr = head (start at the first node).

// Step 2: Traverse the list:
// - While curr is not null (i.e., we haven't reached the end):
// - Save the next node: next = curr.next (so we don't lose the rest of the list).
// - Reverse the current link: curr.next = prev (point the current node backward to the previous node).

// Step 3: Move pointers forward:
// - prev = curr (now prev points to the current node, which is now "reversed").
// - curr = next (move to the next node in the original list).

// Step 4: Return the new head: After the loop, prev points to the last node (which is now the first in the reversed list).
