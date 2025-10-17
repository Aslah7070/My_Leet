/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
let sets=new Set(nums)
console.log(sets.size)
console.log(nums.lenght)
console.log(nums)
if(nums.length!==sets.size){
    return true
}


  return false
    
};