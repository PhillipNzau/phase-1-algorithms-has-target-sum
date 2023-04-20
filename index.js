function hasTargetSum(array, target) {
  // Create an empty set to store the numbers we've seen so far
  const seen = new Set();

  // Loop through each number in the array
  for (let i = 0; i < array.length; i++) {
    // Check if the complement of the current number (i.e., the difference
    // between the target and the current number) has been seen before
    const complement = target - array[i];
    if (seen.has(complement)) {
      console.log(seen);
      // If we've seen the complement before, then we've found a pair that adds up to the target
      return true;
    }

    // Add the current number to the seen set
    seen.add(array[i]);
  }

  // If we've looped through the entire array and haven't found a pair that adds up to the target, return false
  return false;
}
/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
  Create a new arr to hold checked numbers
  Compare diff btwn each number and target and check if the result is in the arr above
  if available return true
  else return false
*/

/*
  Add written explanation of your solution here
  We're using a Set data structure called seen to keep track of the numbers we've seen so far in the array. Sets are optimized for checking if an element exists in them, so we can use the has() method to check if the complement of the current number has been seen before.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
