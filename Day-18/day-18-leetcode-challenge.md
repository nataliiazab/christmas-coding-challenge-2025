## Number of provinces - Task

There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c. A province is a group of directly or indirectly connected cities and no other cities outside of the group.


```js
Example 1:
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2
```

```js
Example 2:
Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3

``` 
```js
Example 3:
Input: isConnected = [[1,1,0],[1,1,1],[0,1,1]]
Output: 1
```


```js
Constraints:
1 <= n <= 200
n == isConnected.length
n == isConnected[i].length
isConnected[i][j] is 1 or 0.
isConnected[i][i] == 1 for all i.
isConnected[i][j] == isConnected[j][i] for all i and j.

```
