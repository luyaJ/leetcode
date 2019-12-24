/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var left = 0;
  var right = numbers.length - 1;
  for (var i = 0; i < numbers.length; i++) {
      if (numbers[left] + numbers[right] === target) {
          return [left + 1, right + 1];
      } else if (numbers[left] + numbers[right] > target) {
          right -= 1;
      } else {
          left += 1;
      }
  }
};
// @lc code=end

