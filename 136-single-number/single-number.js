/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length===0){
        return nums[0]
    }
 for(let x of nums){
    if(nums.indexOf(x)===nums.lastIndexOf(x)){
        return x
    }
 }
};