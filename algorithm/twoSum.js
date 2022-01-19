// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
//

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
//

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// 	140 ms	38.3 MB	JavaScript
var twoSum = function (nums, target) {
  var numberList = [];
  for (var index = 0; index < nums.length; index++) {
    for (var index002 = index; index002 < nums.length; index002++) {
      if (index != index002 && nums[index] + nums[index002] == target) {
        numberList = [index, index002];
      }
    }
  }
  return numberList;
};

var twoSum002 = function (nums, target) {
  for (var index = 0; index < nums.length; index++) {
    if (index + 1 < nums.length && nums[index] + nums[index + 1] == target) {
      return [index, index + 1];
    }
  }
};

console.log(twoSum002([3,2,3], 6));
