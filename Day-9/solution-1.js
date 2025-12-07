// Hash map approach with map object

const numJewelsInStones = function(jewels, stones) {
    const map = new Map();

    for ( let i = 0; i < stones.length; i++) {
        map.set(stones[i], (map.get(stones[i]) || 0) + 1);
    }

    let result = 0;

    for ( let i = 0; i < jewels.length; i++) {
        result += map.get(jewels[i]) || 0;
    }

    return result
};

// Step 1: Create a Map to store the count of each stone type.
// Step 2: Iterate through the stones string and populate the Map with counts.
// Step 3: Initialize a result variable to 0.
// Step 4: Iterate through the jewels string and for each jewel, add its count from the Map to the result.
// Step 5: Return the result.
