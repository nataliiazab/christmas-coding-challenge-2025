// Two pointer approach

const merge = function (nums1, m, nums2, n) {
  let pointer1 = m - 1;
  let pointer2 = n - 1;
  let pointer3 = m + n - 1;

  while (pointer1 >= 0 && pointer2 >= 0) {
    if (nums1[pointer1] > nums2[pointer2]) {
      nums1[pointer3] = nums1[pointer1];
      pointer1--;
    } else {
      nums1[pointer3] = nums2[pointer2];
      pointer2--;
    }

    pointer3--;
  }

  while (pointer2 >= 0) {
    nums1[pointer3] = nums2[pointer2];
    pointer2--;
    pointer3--;
  }
};

// merge([1,2,3,0,0,0], 3, [2,5,6], 3)

// Step 1: initialize three pointers:
//                                  -pointer1 at the end of the valid elements in nums1
//                                  -pointer2 at the end of nums2
//                                  -pointer3 at the end of nums1
// Step 2: while pointer1 and pointer2 are both valid (>= 0), compare the elements at these pointers
// Step 3: place the larger element at pointer3 in nums1, and move the corresponding pointer (pointer1 or pointer2) and pointer3 one position to the left
// Step 4: if there are remaining elements in nums2 (pointer2 >= 0), copy them to nums1 at the positions indicated by pointer3, moving both pointers left until all elements from nums2 are merged into nums1
