// Number of provinces - DFS Solution (Medium level)

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const visited = new Array(n).fill(false);
  let provinces = 0;

  function dfs(city) {
    visited[city] = true;
    for (let j = 0; j < n; j++) {
      if (isConnected[city][j] === 1 && !visited[j]) {
        dfs(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      provinces++;
      dfs(i);
    }
  }

  return provinces;
};

// Example usage:
// const isConnected = [[1,1,0],[1,1,0],[0,0,1]];
// console.log(findCircleNum(isConnected)); // Output: 2

// Step-by-step explanation:
// Step 1: Initialize variables
// - n: number of cities
// - visited: array to track visited cities
// - provinces: counter for number of provinces
// Step 2: Define DFS function
// - Mark the current city as visited
// - For each city, if it is directly connected and not visited, recursively call DFS
// Step 3: Traverse all cities
// - If a city is not visited, it indicates a new province
// - Increment the province counter and call DFS for that city
// Step 4: Return the total number of provinces found after traversing all cities
// - Return the provinces counter
