// linked list cycle detection using Floyd's Tortoise and Hare algorithm

const hasCycle = function (head) {
   let slow = head;
   let fast = head;

   while (fast !== null && fast.next !==null){
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
        return true
    }
   }

    return false;
};
// Example usage:
// Creating a linked list with a cycle for testing
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
const node4 = new ListNode(-4);
const node3 = new ListNode(0, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(3, node2);
node4.next = node2; // Creating a cycle here
console.log(hasCycle(node1)); // Output: true


//Steps:
// Step 1: Initialize two pointers, slow and fast, both starting at the head of the linked list.
// Step 2: Traverse the linked list:
// - Move the slow pointer one step at a time (slow = slow.next).
// - Move the fast pointer two steps at a time (fast = fast.next.next).
// Step 3: Check for cycle:
// - If at any point the slow pointer equals the fast pointer, a cycle exists in the linked list; return true.
// Step 4: End of list check:
// - If the fast pointer reaches the end of the list (fast is null or fast.next is null), there is no cycle; return false.  
