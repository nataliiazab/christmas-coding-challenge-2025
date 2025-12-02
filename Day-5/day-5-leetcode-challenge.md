## Valid Parentheses - Task

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

--Open brackets must be closed by the same type of brackets.
--Open brackets must be closed in the correct order.
--Every close bracket has a corresponding open bracket of the same type.

```js
Example 1:
Input: s = "()"

Output: true

```

```js
Example 2:
Input: s = "()[]{}"

Output: true

```

```js
Example 3:
Input: s = "(]"

Output: false

```

```js
Example 4:
Input: s = "([])"

Output: true

```

```js
Example 5:
Input: s = "([)]"

Output: false

```

```js
Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.


```
