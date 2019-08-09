/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//link to problem
//https://leetcode.com/problems/3sum/
var threeSum = function(nums) {
  let newNums = nums.sort((a, b) => a - b);
  let pointer = 0;
  let triplets = [];
  let prev;
  while (pointer <= nums.length - 2) {
    let first = nums[pointer];

    if (first !== prev) {
      let leftP = pointer + 1;
      let rightP = nums.length - 1;
      while (leftP < rightP) {
        let left = nums[leftP];
        let right = nums[rightP];

        if (first + left + right === 0) {
          triplets.push([first, left, right]);
          while (left === nums[leftP] && leftP < nums.length) leftP++;
          while (right === nums[rightP] && rightP > 0) rightP--;
        } else if (first + left + right < 0) {
          while (left === nums[leftP] && leftP < nums.length) leftP++;
        } else {
          while (right === nums[rightP] && rightP > 0) rightP--;
        }
      }
      prev = first;
    }

    pointer++;
  }

  return triplets;
};
