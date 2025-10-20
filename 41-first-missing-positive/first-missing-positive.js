/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {

const set =new Set(nums)
console.log(nums)
let i=1
while(true){
  if(!set.has(i))return i
  i++
}

    
};