// Hash Map approach with plain object

// const numJewelsInStones = function(jewels, stones) {
//     const map = {}; 
//     for ( let i = 0; i < stones.length; i++) {
//         map[stones[i]] = (map[stones[i]] || 0) + 1;
//     }   
//     let result = 0;
//     for ( let i = 0; i < jewels.length; i++) {
//         result += map[jewels[i]] || 0;
//     }
//     return result;
// };  


const numJewelsInStones = function(jewels, stones) {

    const map = {}; 

    for ( let i = 0; i < stones.length; i++) {
        if ( map[stones[i]]  === undefined)
           map[stones[i]] = 1
        else {
         { map[stones[i]] = map[stones[i]] + 1;}
        }
    }

    let result = 0;

    for ( let i = 0; i < jewels.length; i++) {
        if (map[jewels[i]]){   
             result = result + map[jewels[i]]
             }
    }

    return result
};

// Step 1: Create an object to store the count of each stone type.
// Step 2: Iterate through the stones string and populate the object with counts. If the stone is not in the object, initialize its count to 1; otherwise, increment its count.
// Step 3: Initialize a result variable to 0.
// Step 4: Iterate through the jewels string and for each jewel, add its count from the object to the result.
// Step 5: Return the result.